import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  miPortfolio:any;

  items=[
    {porcent:65,image:"/assets/html5.png",nombre:"HTML5"},
    {porcent:60 , image:"/assets/iconoCss.png",nombre:"CSS"},
    {porcent:35 , image:"/assets/iconoJavascript.png",nombre:"JavaScript"},
    {porcent:70 , image:"/assets/iconoGit.png",nombre:"Git"},
    {porcent:65 , image:"/assets/iconoGithub.png",nombre:"GitHub"},
    {porcent:55 , image:"/assets/iconoAngular.png",nombre:"Angular"},

  ];

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
    })}
}
