import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Videojuegosservices } from '../../services/videojuegosservices';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videojuegos.html',
  styleUrl: './videojuegos.css'
})
export class Videojuegos implements OnInit {
  videojuego = {
    nombre: '',
    plataforma: '',
    genero: '',
    precio: null,
    imagen: '',
    descripcion: ''
  };
  videojuegos: any[] = [];

  constructor(private videojuegosService: Videojuegosservices) {}

  ngOnInit() {
    this.obtenerVideojuegos();
  }

  agregarVideojuego(formulario: NgForm) {
    if (formulario.valid) {
      this.videojuegosService.postVideojuego(this.videojuego).subscribe({
        next: () => {
          this.obtenerVideojuegos();
          formulario.resetForm();
          this.videojuego = {
            nombre: '',
            plataforma: '',
            genero: '',
            precio: null,
            imagen: '',
            descripcion: ''
          };
        },
        error: () => {
          alert('Error al guardar el videojuego');
        }
      });
    }
  }

  obtenerVideojuegos() {
    this.videojuegosService.getVideojuegos().subscribe({
      next: (data: any[]) => {
       
        this.videojuegos = [...data];
      },
      error: () => {
        this.videojuegos = [];
      }
    });
  }

  eliminarVideojuego(id: any) {
    if (confirm('¿Seguro que deseas eliminar este videojuego?')) {
      this.videojuegosService.deleteVideojuego(id).subscribe({
        next: () => this.obtenerVideojuegos(),
        error: () => alert('Error al eliminar el videojuego')
      });
    }
  }
}
