import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'formulario', component: FormComponent},
  {path: '', redirectTo: "inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
