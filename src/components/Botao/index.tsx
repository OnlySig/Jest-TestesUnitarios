import { ReactElement } from "react"
import styled from "styled-components"

const ButtonStyled1 = styled.button `
    height: 80px;
    min-width: 227px;
    border: 2px solid #000;
    border-radius: 0 36px 36px 0;
    box-shadow: 0px 5px 0px 0px rgba(0,0,0,0.75);
    background-color: #C4C4C4;
    color: #444444;
    cursor: pointer;
`
const ButtonStyled2 = styled.button `
    display: flex;
    gap: 26px;
    align-items: center;
    justify-content: center;
    background-color: #FE652B;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
    width: 350px;
    height: 80px;
    border-radius: 36px;
    box-shadow: 0px 5px 0px 0px rgba(0,0,0,0.75);
    cursor: pointer;
` 
const Botao = ( {children, disabled, type, aoClicar} : {children: ReactElement | string, disabled: boolean | undefined, type: string, aoClicar?: () => void}) => {
    return(
        type === 'btnInput' ? 
        <ButtonStyled1 disabled={disabled}>
            {children}
        </ButtonStyled1>
        : <ButtonStyled2 disabled={disabled} onClick={aoClicar}>
            {children}
        </ButtonStyled2>
    )
}

export default Botao