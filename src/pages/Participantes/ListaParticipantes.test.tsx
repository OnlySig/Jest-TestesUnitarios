import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Participantes from "."
import { useListaDeParticipantes } from "../../states/hook/useListaDeParticipantes"

jest.mock('../../states/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participante', () => {
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ser renderizada sem elementos', ()=>{
        render(
            <RecoilRoot>
                <Participantes/>
            </RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {
    const participantes = ['ana', 'roberto']
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('deve ser renderizada sem elementos', ()=>{
        render(
            <RecoilRoot>
                <Participantes/>
            </RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})