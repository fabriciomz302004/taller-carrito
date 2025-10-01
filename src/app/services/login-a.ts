import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginA {
  
 private acceso= false;

  login() {
    this.acceso = true;
    localStorage.setItem('logueado', 'true');
  }

  logout() {
    this.acceso = false;
    localStorage.removeItem('logueado');
  }

  logueado() {
    // Verifica el estado en localStorage para persistencia
    return localStorage.getItem('logueado') === 'true';
  }


  
}
