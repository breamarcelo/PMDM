import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Formulario } from './components/formulario/formulario';
import { ListaPersonajes } from './components/lista-personajes/lista-personajes';


export const routes: Routes = [
    { path: 'semaforo', component: Semaforo },
    { path: 'formulario', component: Formulario },
    { path: 'lista-personajes', component: ListaPersonajes }
];
