import api from "../../index";
import { IFilme } from "../../../interfaces/Filme.interface"

class FilmeData {
  show(generoId: string) {
    return api.get<IFilme[]>(`filme/${generoId}`);
  }
}

export default new FilmeData();