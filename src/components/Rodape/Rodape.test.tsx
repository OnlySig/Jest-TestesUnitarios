import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "."
import { useListaDeParticipantes } from "../../states/hook/useListaDeParticipantes"
jest.mock('../../states/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Josefina'])
    })
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
})