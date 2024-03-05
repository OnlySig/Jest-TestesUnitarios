import styled from 'styled-components';
import Banner from '../../components/Banner'
import Formulario from '../../components/Formulario';
import { useRecoilValue } from 'recoil';
import { listaParticipantesState } from '../../states/atom';

const FormContainer = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid black;
    padding: 87px 0;
    background-color: #FFF9EB;
    height: 657px;
    border-radius: 64px 64px 0 0;
`

const Participantes = () => {
    const hookLista = useRecoilValue(listaParticipantesState)

    return( 
        <>
            <Banner />
            <FormContainer>
                <Formulario />
                {hookLista?.map(listaAnterior => 
                    <p key={listaAnterior.id}>{listaAnterior.nome}</p>
                )}
            </FormContainer>
        </>
    )
}

export default Participantes