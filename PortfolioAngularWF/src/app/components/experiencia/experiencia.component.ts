import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //miPortfolio:any;
  
  //constructor(private datosPortfolio:PortfolioService) { }
  
  //experiencia: Experiencia = new Experiencia("","","","");
  experiencias: Experiencia[] = [];

  constructor(public experienciaService:ExperienciaService){

  }

  ngOnInit(): void {
   /*  this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
  }
    )
 */
    this.experienciaService.getExperiencias().subscribe(data => {this.experiencias = data})
  
  }
}
