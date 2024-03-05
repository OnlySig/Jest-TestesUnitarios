import { render, screen } from "@testing-library/react"
import Formulario from "."

test('quando o input está vazio, novos participantes não podem ser adicionados', () =>{
    //pegar o formulario para teste
    render(<Formulario/>)
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes do participante")
    //encontrar o botao
    const botao = screen.getByRole('button')
    //garantir q esse input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled()
})