import styled from "styled-components"

const H1Title = styled.h1 `
    text-align: center;
    color: #4B69FD;
    margin-bottom: 36px;
`

const Title = ({ title }: {title: string}) => {
    return (
        <H1Title>{title}</H1Title>
    )
}

export default Title