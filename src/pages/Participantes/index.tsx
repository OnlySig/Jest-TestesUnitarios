import styled from 'styled-components';
import Banner from '../../components/Banner'
import Formulario from '../../components/Formulario';
import Rodape from '../../components/Rodape';
import ListaParticipantes from '../../components/ListaParticipantes';

const FormContainer = styled.section `
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid black;
    padding: 87px 0;
    background-color: #FFF9EB;
    border-radius: 64px 64px 0 0;
    height: 50vw;
`
const FormContent = styled.div `
    position: relative;
    height: 500px;
    min-width: 730px;
`
const ListaContainer = styled.ul `
    margin-top: 30px;
    list-style: none;
    text-align: center;
    overflow-y: scroll;
    max-height: 100px;
`
const Participantes = () => {
    
    return( 
        <>
            <Banner/>
            <FormContainer>
                <FormContent>
                    <Formulario/>
                    <ListaContainer>
                        <ListaParticipantes/>
                    </ListaContainer>
                    <Rodape/>
                </FormContent>
            </FormContainer>
        </>
    )
}

export default Participantes