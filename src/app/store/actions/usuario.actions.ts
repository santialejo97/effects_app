import { Usuario } from '../../models/usuarios.model';
import { createAction, props } from '@ngrx/store';

export const cargarUsuario = createAction(
  '[Usuario] cargarUsuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] cargarUsuarioSuccess',
  props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
  '[Usuario] cargarUsuarioError',
  props<{ payload: any }>()
);
