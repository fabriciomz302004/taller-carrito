import { Routes } from '@angular/router';
import { Carrito, } from './pages/carrito/carrito';

import { Registro } from './pages/registro/registro';
import { Resumen } from './pages/resumen/resumen';

import { Productos } from './pages/productos/productos';

export const routes: Routes = [

    { path: 'carrito', component: Carrito },
    { path: 'productos', component: Productos },
    { path: 'registro', component: Registro },
    { path: 'resumen', component: Resumen },
    


];
