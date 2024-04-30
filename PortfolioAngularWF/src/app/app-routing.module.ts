import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: AcercaDeMiComponent},
  {path:'sobreMi', component:AcercaDeMiComponent},
  {path:'estudios',component:EstudiosComponent},
  {path:'experiencia',component:ExperienciaComponent},
  {path:'habilidades', component:HabilidadesComponent},
  {path:'proyectos', component:ProyectosComponent}, 
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:Error404Component} //dejar en ultimo lugar de Rutas la de error404
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
