import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as usuarioActions from '../../store/actions';
import { Usuario } from '../../models/usuarios.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuario!: Usuario;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({ usuario, loading, error }) => {
      console.log(usuario);
      if (usuario != null) this.usuario = usuario;
    });
    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(usuarioActions.cargarUsuario({ id }));
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
