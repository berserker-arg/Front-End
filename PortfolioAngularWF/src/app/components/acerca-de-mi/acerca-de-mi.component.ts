import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  acercaDe = ["Estudiante de Mantenimiento industrial (cursando ultima materia) en Instituto Tecnologico Universitario y programacion en Argentina Programa, con intereses en programacion, electronica y automatizacion."];

  constructor() { }

  ngOnInit(): void {
  }

}
