import { act, fireEvent, render, screen } from "@testing-library/react"
import Formulario from "."
import { RecoilRoot } from "recoil"

describe('o comportamento do formulario.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () =>{
        //pegar o formulario para teste
        render(
        <RecoilRoot>
                <Formulario/>
            </RecoilRoot>)
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
        //encontrar o botao
        const botao = screen.getByRole('button')
        //garantir q esse input esteja no documento
        expect(input).toBeInTheDocument()
        //garantir que o botao esteja desabilitado
        expect(botao).toBeDisabled()
    })
    
    test('adicionar um participante caso exista um nome preenchido', ()=> {
        render(
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
        // Inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Gabriel Castro'
            }
        })
        fireEvent.click(botao)
        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
    })
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Gabriel Castro'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Gabriel Castro'
            }
        })
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole('alert')
    
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    
    test('a mensagem de erro deve sumir apos os timers', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario/>
            </RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, {
            target: {
                value: 'Gabriel Castro'
            }
        })
        fireEvent.click(botao)
        fireEvent.change(input, {
            target: {
                value: 'Gabriel Castro'
            }
        })
        fireEvent.click(botao)
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
        // esperar X segundos
        act(()=>{
            jest.runAllTimers()
        })
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})