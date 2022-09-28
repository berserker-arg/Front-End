import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  items=[
    {porcent:93,image:"",nombre:"HTML5"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
