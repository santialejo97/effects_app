import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuarios.model';
import { DataReqRes } from '../interfaces/reqres.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http
      .get<DataReqRes>(`${this.url}/users?per_page=6`)
      .pipe(map((resp) => resp.data));
  }
}
