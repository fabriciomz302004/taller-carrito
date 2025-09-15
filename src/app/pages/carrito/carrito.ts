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
    // Asegura que cada producto tenga la propiedad cantidad
    this.carrito = items.map((p: any) => ({ ...p, cantidad: p.cantidad || 1 }));
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
    // Guardar la compra antes de vaciar el carrito
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
