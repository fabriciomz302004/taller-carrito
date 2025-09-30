import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Videojuegosservices {
  private API_VIDEOJUEGOS = 'http://localhost:9090/videojuegos'; // Cambia el endpoint según tu backend

  constructor(private http: HttpClient) {}

  // Crear videojuego
  postVideojuego(videojuego: any): Observable<any> {
    return this.http.post(this.API_VIDEOJUEGOS, videojuego);
  }

  // Obtener todos los videojuegos
  getVideojuegos(): Observable<any> {
    return this.http.get(this.API_VIDEOJUEGOS);
  }

  // Obtener un videojuego por ID
  getVideojuego(id: any): Observable<any> {
    return this.http.get(`${this.API_VIDEOJUEGOS}/${id}`);
  }

  // Actualizar videojuego
  updateVideojuego(videojuego: any): Observable<any> {
    return this.http.put(`${this.API_VIDEOJUEGOS}/${videojuego.id}`, videojuego);
  }

  // Eliminar videojuego
  deleteVideojuego(id: any): Observable<any> {
    return this.http.delete(`${this.API_VIDEOJUEGOS}/${id}`);
  }
}
