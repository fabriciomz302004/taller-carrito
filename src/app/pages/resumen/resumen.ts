import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import usuariosData from '../../../../assets/data/usuarios.json';
import { Router, RouterLink } from '@angular/router';
import { LoginA } from '../../services/login-a';

@Component({
  selector: 'app-resumen',
  imports: [CommonModule,RouterLink],
  templateUrl: './resumen.html',
  styleUrl: './resumen.css'
})
export class Resumen {
  usuario: any = {};
  carrito: any[] = [];
  total: number = 0;

  constructor() {
    // Obtener el id o email del usuario actual desde localStorage
    const usuarioGuardado = localStorage.getItem('usuario');
    let id = null;
    let email = null;
    if (usuarioGuardado) {
      const usuarioLocal = JSON.parse(usuarioGuardado);
      id = usuarioLocal.id;
      email = usuarioLocal.email;
    }
    // Buscar usuario en el JSON importado
    if (id) {
      this.usuario = usuariosData.users.find((u: any) => u.id === id) || {};
    } else if (email) {
      this.usuario = usuariosData.users.find((u: any) => u.email === email) || {};
    } else {
      // Si no hay usuario en localStorage, mostrar el primero del JSON
      this.usuario = usuariosData.users[0] || {};
    }
    // Los productos comprados se guardan en 'compra' (última compra realizada)
    const compraGuardada = localStorage.getItem('compra');
    if (compraGuardada) {
      this.carrito = JSON.parse(compraGuardada);
      this.total = this.carrito.reduce((acc: number, item: any) => acc + (item.precio * item.cantidad), 0);
    }
  }
  servicio = inject(LoginA);
  ruta = inject(Router);


  logout(){
    this.servicio.logout();
    this.ruta.navigate(['/login']);
  }
}
