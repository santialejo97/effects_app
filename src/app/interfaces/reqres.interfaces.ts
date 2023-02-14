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

export interface DataReqResUser {
  data: Data;
  support: Support;
}

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
