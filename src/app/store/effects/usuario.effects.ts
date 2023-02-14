import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { mergeMap, tap, map, catchError, of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioServices: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),

      mergeMap((action) =>
        this.usuarioServices.getUserById(action.id).pipe(
          map((user) =>
            usuariosActions.cargarUsuarioSuccess({ usuario: user })
          ),
          catchError((err) =>
            of(usuariosActions.cargarUsuarioError({ payload: err }))
          )
        )
      )
    );
  });
}
