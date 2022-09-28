import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  acercaDe = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolor illo dolorum quis, saepe, itaque natus totam laboriosam tenetur accusamus possimus perferendis exercitationem est dolore ex quia quae laborum placeat!"];

  constructor() { }

  ngOnInit(): void {
  }

}
