import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Autenticacion } from '../../services/autenticacion';
import { LoginA } from '../../services/login-a';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  servicio = inject(Autenticacion);
  servicio2 = inject(LoginA);
  ruta = inject(Router);

  email= ""
  password=""

  login( datos: NgForm) {
    this.servicio.loginUser(datos.value).subscribe(p => {
      if (p.accessToken) {
        // Guardar datos del usuario logueado en localStorage
        localStorage.setItem('usuario', JSON.stringify(p.user));
        this.servicio2.login();
        this.ruta.navigate(['/productos']);
      }
    })
  }
}
