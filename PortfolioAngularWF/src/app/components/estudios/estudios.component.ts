import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios = [
    {actividad: "Tecnico en mantenimiento y reparacion de pc", anio: "2012",lugar:"fundacion saber",imagen:"/assets/reparacionpc.png" },
    {actividad:"Herreria y soldadura",anio:"2018",lugar:"Centro de capacitacion laboral",imagen:"/assets/herreria.jpg"},
    {actividad:"Tecnico universitario en mantenimiento indiustrial e instalaciones",anio:"2019-cursando ultima",lugar:"Instituto Tecnologico Universitario",imagen:"/assets/mantenimientoindustrial.jfif"},
    {actividad:"Electricidad de automotor, sensores y conexion a computadora de auto", anio:"2020", lugar:"Instituto Tecnologico Universitario",imagen:"/assets/electricidadauto.jpg"},
    {actividad:"Programacion web Full Stack Jr",anio:"2022",lugar:"Argentina Programa",imagen:"/assets/argentinaprogr.png"}
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
