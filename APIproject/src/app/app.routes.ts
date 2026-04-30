import { Routes } from '@angular/router';
import { LibroListaComponent } from './components/libro-lista-component/libro-lista-component';
import { GuardarLibroComponent } from './components/guardar-libro-component/guardar-libro-component';
import { Login } from './components/login/login';

export const routes: Routes = [
    { path: 'libros', component: LibroListaComponent },
    { path: 'guardar-libro', component: GuardarLibroComponent },
    { path: 'login', component: Login }
];
