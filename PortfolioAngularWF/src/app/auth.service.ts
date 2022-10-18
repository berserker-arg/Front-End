import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    url = 'http://localhost:4200/api';
    token:any;



  constructor(private http:HttpClient,private router: Router) { }

  login(email:string,password:string) {
  this.http.post(this.url + `/authenticate`,{email:email,password:password})
      .subscribe((resp:any) => {
        //Redirecciona usuario a su perfil
        this.router.navigate([`profile`]);
        //Guardamos el token en localStorage
        localStorage.setItem(`auth_token`,resp.token);
      })
  }
  //cerrar sesion eliminando el token de localStorage
  logout(){
    localStorage.removeItem(`token`);
  }
  //servicio para verificar si existe la sesion
  public get logIn():boolean {
    return (localStorage.getItem(`token`) !== null);
    
  }
}  
