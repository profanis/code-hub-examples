import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsTypeaheadComponent } from './rxjs-typeahead/rxjs-typeahead.component';


const routes: Routes = [
  {path: "rxjs-typeahead", component: RxjsTypeaheadComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RxjsTypeaheadComponent],
  exports: [RouterModule]
})
export class RxjsTypeaheadModule { }
