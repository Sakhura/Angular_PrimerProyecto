import { Routes } from '@angular/router';
//importar las paginas necesarias
import { HomeComponent } from  './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

//se definen las rutas, es donde redirigimos a nuestros usuarios
export const routes: Routes = [
    {
        path: '', //se deja vacio para que sea lo primero que aparece
        component: HomeComponent
    },
    {
        path: 'labs', // realizaremos pruebas antes de pasar a pagina principal 
        component: LabsComponent
    },
];
