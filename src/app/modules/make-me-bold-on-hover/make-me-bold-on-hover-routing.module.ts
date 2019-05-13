import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoldMeComponent } from './bold-me/bold-me.component';

const routes: Routes = [
  {path: 'makemebold', component: BoldMeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeMeBoldOnHoverRoutingModule { }
