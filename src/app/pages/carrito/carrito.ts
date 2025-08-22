import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
  imports: [CommonModule, CurrencyPipe]
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
    // Implementa la lógica de pago aquí
    alert('¡Gracias por tu compra!');
    this.carrito = [];
    localStorage.removeItem('carrito');
  }
}
