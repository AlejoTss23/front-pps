import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { LoguinComponent } from './loguin/loguin.component';
import { AdministracionComponent } from './administracion/administracion.component';
const routes: Routes = [
  {path: '', component: VistaPrincipalComponent,},
  {path: 'loguin', component: LoguinComponent},
  {path: 'administracion', component: AdministracionComponent}
  // verdetallescompoene path: 'detalles/id:1'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
