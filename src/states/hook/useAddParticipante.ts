import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"
import { IParticipantes } from "../../interfaces/IParticipantes"

export const useAddParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    const setErro = useSetRecoilState(erroState)
    const hookLista = useRecoilValue(listaParticipantesState)
    return (event: IParticipantes) => {
        const itemRepetido = hookLista.find(item => item.nome === event.nome)
        if(event.nome === '' || itemRepetido !== undefined ){
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            }, 3000);
            return
        }
        setLista(listaAnterior => [...listaAnterior, event])
    }
}
