import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './vistas/lista/lista.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';

const routes: Routes = [
  {path:'', redirectTo:'lista', pathMatch:'full'},
  {path:'lista', component:ListaComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar/:codigo', component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListaComponent,NuevoComponent,EditarComponent]

