import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuarios.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as usuarioActions from '../../store/actions';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;
  unSubscription!: Subscription;

  constructor(private store: Store<AppState>) {} // private usuarioService: UsuarioService

  ngOnInit(): void {
    this.unSubscription = this.store
      .select('usuarios')
      .subscribe(({ usuarios, loading, error }) => {
        console.log(usuarios);
        this.usuarios = usuarios;
        this.loading = loading;
        this.error = error;
        console.log(error, loading);
      });
    // this.usuarioService.getUsers().subscribe((users) => {
    //   this.usuarios = users;
    // });
    this.store.dispatch(usuarioActions.cargarUsuarios());
  }

  ngOnDestroy(): void {
    this.unSubscription.unsubscribe();
  }
}
