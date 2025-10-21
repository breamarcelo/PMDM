import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [
    { path: 'semaforo', component: Semaforo },
    { path: 'formulario', component: Formulario }
];
