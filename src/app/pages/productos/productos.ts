import { Component, ChangeDetectorRef, inject } from '@angular/core';
import datos from '../../../../assets/video_juegos.json';
import { CommonModule } from '@angular/common';
import { LoginA } from '../../services/login-a';
import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  videojuegos: any[] = [];
  mensaje: string = '';
  constructor(private cd: ChangeDetectorRef) {
    // Inicializa videojuegos y cantidad
    this.videojuegos = datos.videojuegos.map(j => ({ ...j, cantidad: 1 }));
  }

  agregarAlCarrito(juego: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    // Busca si el juego ya está en el carrito
    const idx = carrito.findIndex((item: any) => item.titulo === juego.titulo);
    if (idx > -1) {
      carrito[idx].cantidad += juego.cantidad;
    } else {
      carrito.push({ ...juego });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Mostrar mensaje breve
    this.mostrarMensaje('¡Videojuego agregado!');
  }

  mostrarMensaje(texto: string) {
    this.mensaje = texto;
    this.cd.detectChanges();
    setTimeout(() => {
      this.mensaje = '';
      this.cd.detectChanges();
    }, 2000);
  }
  servicio = inject(LoginA);
  ruta = inject(Router);


  logout(){
    this.servicio.logout();
    this.ruta.navigate(['/login']);
  }
}
