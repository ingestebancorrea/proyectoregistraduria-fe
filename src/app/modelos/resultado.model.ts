import { Candidato } from "./candidato.model";
import { Mesa } from "./mesa.model";

export class Resultado {
    _id?:string;
    mesa?:Mesa;
    candidato?:Candidato;
    numero_votos?:string;
}