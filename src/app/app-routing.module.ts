import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { ContentComponent } from './content/content.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashbord' ,pathMatch:'full'},
  {path:"produit", component : ProduitComponent },
  {path:"dashbord", component : DashbordComponent },
  {path:"content", component : ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
