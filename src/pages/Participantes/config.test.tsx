import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Participantes from "."

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina de configuracao',()=>{
    test('deve ser renderizada corretamente',()=>{
        const { container } = render(
            <RecoilRoot>
                <Participantes/>
            </RecoilRoot>)
            expect(container).toMatchSnapshot()        
    })
})