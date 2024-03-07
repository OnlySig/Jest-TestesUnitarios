import './styles.css'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useAddParticipante } from '../../states/hook/useAddParticipante'
import Title from '../Title'
import { idGem } from '../../states/utils/idGem'
import { useMensagemDeErro } from '../../states/hook/useMensagemDeErro'
import Botao from '../Botao'
const ContainerInput = styled.div `
    display: flex;
    width: 100%;
`
const ErroMsg = styled.h2 `
    color: red;
`
const Formulario = () => {
    const mensagemDeErro = useMensagemDeErro()
    const [nome, setNome] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const hookAdicionarPt = useAddParticipante()
    const submitar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        hookAdicionarPt({
            nome: nome,
            id: mensagemDeErro ? undefined : idGem()
        })
        setNome('')
        inputRef.current?.focus()
    }
    return(
        <form onSubmit={submitar}>
            <Title title='Vamos começar!'/>
            <ContainerInput>
                <input className='inputStyled' ref={inputRef} type="text" placeholder="Insira os nomes dos participantes" onChange={e => setNome(e.target.value)} value={nome}/>
                <Botao type='btnInput' disabled={!nome}>Adicionar</Botao>
            </ContainerInput>
            <ErroMsg>{mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}</ErroMsg>
        </form>
    )
}

export default Formulario