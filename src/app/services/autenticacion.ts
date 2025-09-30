import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Autenticacion {
    constructor(private http: HttpClient) { }
//login
  private API_USER="http://localhost:3000/login"

 // private API_USER="http://localhost:9090/api/login"

  loginUser(usuario:JSON):Observable<any>{
    return this.http.post(this.API_USER,usuario)

  }
  //registro
  private API_USER_REGISTRO="http://localhost:3000/users"

  //private API_USER_REGISTRO="http://localhost:9090/usuario/form"

  registroUser(usuario:JSON):Observable<any>{
    return this.http.post(this.API_USER_REGISTRO,usuario)

  }
  
}
