import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path:'inicio', component:HeaderComponent},
  {path:'sobreMi', component:AcercaDeMiComponent},
  {path:'estudios',component:EstudiosComponent},
  {path:'experiencia',component:ExperienciaComponent},
  {path:'habilidades', component:HabilidadesComponent},
  {path:'proyectos', component:ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
