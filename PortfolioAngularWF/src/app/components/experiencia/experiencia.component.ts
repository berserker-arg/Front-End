import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos = [
    {trabajo:"Trabajo",tiempo:"Años de trabajo",resumen:"Lorem ipsum dolor sit amet consectetur adipisicing elit.", imagen:""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
