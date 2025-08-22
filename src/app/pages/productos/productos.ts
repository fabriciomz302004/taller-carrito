import { Component } from '@angular/core';
import datos from '../../../../assets/video_juegos.json';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  videojuegos: any[] = [];

  constructor() {
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
  }
}
