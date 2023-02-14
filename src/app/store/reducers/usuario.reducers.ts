import { createReducer, on } from '@ngrx/store';
import * as usuariosActions from '../actions';
import { Usuario } from 'src/app/models/usuarios.model';

export interface usuarioState {
  usuario: Usuario | null;
  loaded: boolean;
  loading: boolean;
  error: any;
  id: string;
}

export const usuarioinitialState: usuarioState = {
  usuario: null,
  loaded: false,
  loading: false,
  error: null,
  id: '',
};

export const usuarioReducer = createReducer(
  usuarioinitialState,

  on(usuariosActions.cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id: id,
  })),
  on(usuariosActions.cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loaded: true,
    loading: false,
    usuario: { ...usuario },
  })),
  on(usuariosActions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.url, name: payload.name, message: payload.message },
  }))
);
