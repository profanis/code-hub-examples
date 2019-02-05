import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ResolverComponent } from './resolver/resolver.component';
import { ResolverResolver } from './resolver.resolver';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: "resolvers",
    component: ResolverComponent,
    resolve: {
      myData: ResolverResolver
    }
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResolverComponent],
  providers: [
    ResolverResolver,
    ResolverService
  ]
})
export class ResolversModule { }
