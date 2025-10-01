import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LoginA } from '../../services/login-a';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
  imports: [CommonModule, CurrencyPipe, RouterLink]
})
export class Carrito {
  carrito: any[] = [];

  ngOnInit() {
    const items = JSON.parse(localStorage.getItem('carrito') || '[]');
   
    this.carrito = items.map((p: any) => ({
      ...p,
      cantidad: p.cantidad || 1,
      nombre: p.nombre || p.titulo || '',
      plataforma: typeof p.plataforma === 'string' ? p.plataforma : Array.isArray(p.plataforma) ? p.plataforma.join(', ') : '',
      genero: typeof p.genero === 'string' ? p.genero : Array.isArray(p.genero) ? p.genero.join(', ') : '',
      imagen: p.imagen || '',
      precio: p.precio || 0,
      descripcion: p.descripcion || ''
    }));
  }

  cambiarCantidad(producto: any, cambio: number) {
    const idx = this.carrito.indexOf(producto);
    if (idx > -1) {
      this.carrito[idx].cantidad += cambio;
      if (this.carrito[idx].cantidad < 1) {
        this.carrito[idx].cantidad = 1;
      }
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  eliminarDelCarrito(producto: any) {
    this.carrito = this.carrito.filter(p => p !== producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  calcularSubtotal() {
    return this.carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  }

  procederAlPago() {
    localStorage.setItem('compra', JSON.stringify(this.carrito));
    alert('¡Gracias por tu compra!');
    this.carrito = [];
    localStorage.removeItem('carrito');
  }
  servicio = inject(LoginA);
  ruta = inject(Router);


  logout(){
    this.servicio.logout();
    this.ruta.navigate(['/login']);
  }
}
