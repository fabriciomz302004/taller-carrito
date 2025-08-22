import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../../services/usuarios';





@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  servicio = inject(Usuarios);

  id: string = "";
  nombre: string = "";
  email: string = ""; // <-- nueva propiedad
  edad: number = 0;
  password: string = ""; // <-- agrega esta propiedad
  confirmarPassword: string = ""; // <-- agrega esta propiedad

  guardar(usuario :any) {
  
    console.log(usuario.value);
    this.servicio.postUser(usuario.value).subscribe();
    this.id = "";
    this.nombre = "";
    this.email = "";
    this.edad = 0;
    this.password = "";
    this.confirmarPassword = "";
  }
}

