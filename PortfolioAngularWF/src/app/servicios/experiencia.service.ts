import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'http://localhost:8080/experiencia';

  constructor(private http:HttpClient) { }
/*
  public list(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + ´list´);
  }
*/
  public getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + '/verExperiencias')
  }

}
