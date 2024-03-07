import { IParticipantes } from "../../interfaces/IParticipantes"

const Card = ({ listaDeNomes } : { listaDeNomes: IParticipantes}) => {
    return <li>{listaDeNomes.nome}</li>
}

export default Card