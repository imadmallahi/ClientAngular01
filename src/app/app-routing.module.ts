import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:"produit", component : ProduitComponent },
  {path:"content", component : ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
