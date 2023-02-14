import { createReducer, on } from '@ngrx/store';
import * as usuariosActions from '../actions';
import { Usuario } from 'src/app/models/usuarios.model';

export interface State {
  usuarios: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  initialState,

  on(usuariosActions.cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(usuariosActions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loaded: true,
    loading: false,
    usuarios: [...usuarios],
  })),
  on(usuariosActions.cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.url, name: payload.name, message: payload.message },
  }))
);
