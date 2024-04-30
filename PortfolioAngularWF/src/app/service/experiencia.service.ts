import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url= 'http://localhost:8080/experiencia/'
  constructor(private httpClient:HttpClient) { }

  

  public list(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'verExperiencias');
  }

  public crearExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.post<Experiencia>(this.url + 'crearExperiencia', experiencia);
  }

  public editarExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.put<Experiencia>(this.url + 'editarExperiencia/' + experiencia.id, experiencia);
  }

  public borrarExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.delete<Experiencia>(this.url + 'borrarExperiencia/${id}');
  }

}
