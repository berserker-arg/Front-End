import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos = [
    {trabajo:"Tecnico de PC",tiempo:"2011-2013",resumen:"Mantenimiento y reparacion de computadoras.", imagen:"/assets/reparacionpc.png"},
    {trabajo:"Atencion al cliente",tiempo:"2015-2017",resumen:"Atencion en kiosco y minimarket, recepcion en un hostel, y trabajos esporadicos.", imagen:"/assets/recepcion.png"},
    {trabajo:"Herreria",tiempo:"2018-hasta la fecha",resumen:"Diseño y armado de portones, rejas y trabajos de herreria en general.",imagen:"/assets/herreria.jpg"}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
