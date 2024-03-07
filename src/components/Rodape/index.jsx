import Botao from "../Botao"
import IconPlay from "../../imgs/play_circle_outline.svg"
import ImgSacola from "../../imgs/Wavy Buddies Shopping Bags.svg"
import styled from "styled-components"
import { useListaDeParticipantes } from "../../states/hook/useListaDeParticipantes"
import { useNavigate } from "react-router-dom"

const ContainerRodape = styled.footer `
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Rodape = () => {
    const lista = useListaDeParticipantes()
    const navegar = useNavigate()
    const iniciar = () => navegar('/sorteio')
    
    return (
        <ContainerRodape>
            <Botao type="type2" disabled={lista.length < 3} aoClicar={iniciar}> <img src={IconPlay} alt="iconePlay" /> Iniciar brincadeira!</Botao>
           <img src={ImgSacola} alt="imagem de duas sacolas de compras" />
        </ContainerRodape>
    )
}
export default Rodape