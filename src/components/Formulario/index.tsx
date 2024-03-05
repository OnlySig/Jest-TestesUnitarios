import './styles.css'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { useAddParticipante } from '../../states/hook/useAddParticipante'
import Title from '../Title'
import { idGem } from '../../states/utils/idGem'
import { useMensagemDeErro } from '../../states/hook/useMensagemDeErro'


const ButtonStyled = styled.button `
    height: 80px;
    width: 227px;
    border: 2px solid #000;
    border-radius: 0 36px 36px 0;
    box-shadow: 0px 5px 0px 0px rgba(0,0,0,0.75);
    background-color: #C4C4C4;
    color: #444444;
    cursor: pointer;
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
            id: idGem()
        })
        setNome('')
        inputRef.current?.focus()
    }
    return(
        <form onSubmit={submitar}>
            <Title title='Vamos começar!'/>
            <div>
                <input className='inputStyled' ref={inputRef} type="text" placeholder="Insira os nomes dos participantes" onChange={e => setNome(e.target.value)} value={nome}/>
                <ButtonStyled disabled={!nome}>Adicionar</ButtonStyled>
                {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
            </div>
        </form>
    )
}

export default Formulario