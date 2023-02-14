import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { mergeMap, tap, map, catchError, of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosServices: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),

      mergeMap(() =>
        this.usuariosServices.getUsers().pipe(
          map((users) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError((err) =>
            of(usuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    );
  });
}
