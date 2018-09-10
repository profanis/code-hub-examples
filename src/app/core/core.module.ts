import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BasicCanLoadGuard } from './guards/basic-can-load.guard';
import { NavBarModule } from './nav-bar/nav-bar.module';

/**
 * Singleton Services and App level components
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NavBarModule
  ],
  declarations: [],
  exports: [NavBarModule],
  providers: [
    BasicCanLoadGuard
  ]
})
export class CoreModule {

}
