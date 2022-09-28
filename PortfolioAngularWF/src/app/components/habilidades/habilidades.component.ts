import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  items=[
    {porcent:65,image:"/assets/html5.png",nombre:"HTML5"},
    {porcent:60 , image:"",nombre:"CSS"},
    {porcent:35 , image:"",nombre:"JavaScript"},
    {porcent:70 , image:"",nombre:"Git"},
    {porcent:65 , image:"",nombre:"GitHub"},
    {porcent:55 , image:"",nombre:"Angular"},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
