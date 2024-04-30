import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

 miPortfolio: any;

  constructor(private datosPortfolio:PortfolioService) { }

  


  ngOnInit(): void {
   
    this.datosPortfolio.obtenerDatos().subscribe(data => {
    this.miPortfolio=data;
    })
    
  }

}
