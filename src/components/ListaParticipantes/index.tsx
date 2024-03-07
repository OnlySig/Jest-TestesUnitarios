import { IParticipantes } from "../../interfaces/IParticipantes"
import { useListaDeParticipantes } from "../../states/hook/useListaDeParticipantes"
import Card from "../Card"

const ListaParticipantes = () => {
    const hookLista: IParticipantes[] = useListaDeParticipantes()
    return(
        <>
            {hookLista?.map(listaAnterior => <Card key={listaAnterior.id} listaDeNomes={{...listaAnterior}}/>)}
        </>
    )
}

export default ListaParticipantes