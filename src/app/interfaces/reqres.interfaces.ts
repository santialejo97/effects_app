import { Usuario } from '../models/usuarios.model';
export interface DataReqRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}
