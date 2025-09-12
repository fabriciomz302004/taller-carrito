import { CanActivateFn } from '@angular/router';
import { LoginA } from '../services/login-a';
import { inject } from '@angular/core';

export const productogGuard: CanActivateFn = (route, state) => {
  

  let servicio = inject(LoginA);

  if (servicio.logueado()) {
    return true;
  }
  return false;
};
