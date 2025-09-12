import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginA {
  
 private acceso= false;

  login() {
    this.acceso = true;
  }

  logout() {
    this.acceso = false;
  }
   logueado() {
     return this.acceso;
   }


  
}
