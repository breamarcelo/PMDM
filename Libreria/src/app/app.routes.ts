import { Routes } from '@angular/router';
import { ListarLibros } from './components/listar-libros/listar-libros';
import { Login } from './components/login/login';

export const routes: Routes = [
    { path: 'libros', component: ListarLibros },
    { path: 'login', component: Login }
];
