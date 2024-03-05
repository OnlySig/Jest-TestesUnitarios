import { atom } from "recoil";
import { IParticipantes } from "../interfaces/IParticipantes";

export const listaParticipantesState = atom<IParticipantes[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})