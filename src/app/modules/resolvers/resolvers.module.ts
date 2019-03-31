import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolversRoutingModule } from './resolvers-routing.module';
import { ResolversComponent } from './resolvers/resolvers.component';

@NgModule({
  imports: [
    CommonModule,
    ResolversRoutingModule
  ],
  declarations: [ResolversComponent]
})
export class ResolversModule { }
