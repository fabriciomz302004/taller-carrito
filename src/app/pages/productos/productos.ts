import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Videojuegosservices } from '../../services/videojuegosservices';
import { LoginA } from '../../services/login-a';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  videojuegos: any[] = [];
  mensaje: string = '';
  servicio = inject(LoginA);
  ruta = inject(Router);

  constructor(private cd: ChangeDetectorRef, private videojuegosService: Videojuegosservices) {}

  ngOnInit() {
    this.videojuegosService.getVideojuegos().subscribe((data: any[]) => {
      this.videojuegos = data.map(j => ({ ...j, cantidad: 1 }));
      this.cd.detectChanges();
    });
  }

  agregarAlCarrito(juego: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const idx = carrito.findIndex((item: any) => item.nombre === juego.nombre);
    if (idx > -1) {
      carrito[idx].cantidad += juego.cantidad;
    } else {
      carrito.push({ ...juego });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.mostrarMensaje('¡Videojuego agregado!');
  }

  cambiarCantidad(juego: any, cambio: number) {
    juego.cantidad = Math.max(1, (juego.cantidad || 1) + cambio);
    this.cd.detectChanges();
  }

  mostrarMensaje(texto: string) {
    this.mensaje = texto;
    this.cd.detectChanges();
    setTimeout(() => {
      this.mensaje = '';
      this.cd.detectChanges();
    }, 2000);
  }

  logout(){
    this.servicio.logout();
    this.ruta.navigate(['/login']);
  }
}
