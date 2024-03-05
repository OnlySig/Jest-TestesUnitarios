import logo from '../../imgs/Logo Branco - Horizontal 2.svg'
import niceDude from '../../imgs/carinhaDahora.svg'
import styled from 'styled-components'

const HeaderContainer = styled.header `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 454px;
`
const ImagemCarinha = styled.img `
    position: relative;
    top: 119px;
    width: 450px;
`

const Banner = () => {
    return(
        <HeaderContainer>
            <img src={logo} alt="logo do siteDahora" />
            <ImagemCarinha src={niceDude} alt="um cara feliz" />
        </HeaderContainer>
    )
}

export default Banner 