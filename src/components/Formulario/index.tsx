import styled from 'styled-components'

const FormContainer = styled.form `
    background-color: #FFF9EB;
    height: 657px;
    border-radius: 64px 64px 0 0;
`

const Formulario = () => {
    return(
        <FormContainer>
            <input type="text" placeholder="Insira os nomes do participante" />
            <button disabled>Adicionar</button>
        </FormContainer>
    )
}

export default Formulario