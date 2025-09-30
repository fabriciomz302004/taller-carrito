import { Routes } from '@angular/router';
import { Carrito, } from './pages/carrito/carrito';

import { Registro } from './pages/registro/registro';
import { Resumen } from './pages/resumen/resumen';

import { Productos } from './pages/productos/productos';
import { productogGuard } from './guards/productog-guard';
import { Login } from './pages/login/login';
import { Videojuegos } from './pages/videojuegos/videojuegos';


export const routes: Routes = [

    { path: 'carrito', component: Carrito , canActivate: [productogGuard] },
    { path: 'productos', component: Productos , canActivate: [productogGuard] },
    { path: 'registro', component: Registro },
    { path: 'login', component: Login },
    { path: 'resumen', component: Resumen , canActivate: [productogGuard]},
    { path: 'videojuegos1', component: Videojuegos, canActivate: [productogGuard] },
    


];
