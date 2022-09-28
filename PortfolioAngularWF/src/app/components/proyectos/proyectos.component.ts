import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos=[
    {nombre:"Aquí iría mi proyecto..",resumen:"Si tan solo tuviera uno!! (este es el primero)", image:"assets/trofeo.jfif" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
