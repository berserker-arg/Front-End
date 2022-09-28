import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios = [
    {actividad: "Tecnico en mantenimiento y reparacion de pc", anio: "2012",lugar:"fundacion saber" }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
