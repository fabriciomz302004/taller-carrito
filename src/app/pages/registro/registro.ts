import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Autenticacion } from '../../services/autenticacion';
import { Router } from '@angular/router';





@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
   servicio = inject(Autenticacion);
  ruta = inject(Router);

  email= ""
  password=""
  nombre=""
  edad=""

  registro(datos: any) {
    this.servicio.registroUser(datos.value).subscribe({
      next: () => {
        this.ruta.navigate(['/login']);
      },
    });
  }
  loginruta(){
    this.ruta.navigate(['/login']);
  }

}

