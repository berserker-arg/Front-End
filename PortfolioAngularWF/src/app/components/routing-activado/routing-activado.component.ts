import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-activado',
  templateUrl: './routing-activado.component.html',
  styleUrls: ['./routing-activado.component.css']
})
export class RoutingActivadoComponent implements OnInit {

  public activarRouting: boolean = false;

  getActivar(){
    return this.activarRouting;
  }

  constructor() { 

    

  }

  

  ngOnInit(): void {
  }

}
