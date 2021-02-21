import api from "../../index";
import { IGenero } from "../../../interfaces/Genero.interface"

class GeneroData {
  index() {
    return api.get<IGenero[]>('generos');
  }
}

export default new GeneroData();