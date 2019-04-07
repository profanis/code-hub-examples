import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolversComponent } from './resolvers/resolvers.component';
import { CountryResolver } from './country.resolver';


const routes: Routes = [
  {path: 'resolvers', component: ResolversComponent, resolve: { countries: CountryResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolversRoutingModule { }
