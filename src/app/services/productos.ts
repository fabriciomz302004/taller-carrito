import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// PRIMERO define y exporta la interfaz Producto
export interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  plataforma?: string;
  genero?: string;
  desarrollador?: string;
}

// LUEGO el servicio
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);
  private jsonURL = 'assets/data/video_juegos.json';

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.jsonURL);
  }
}