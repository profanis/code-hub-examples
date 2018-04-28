import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { BuiltInDirectivesService } from './built-in-directives.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuiltInDirectivesComponent],
  providers: [BuiltInDirectivesService],
  exports: [BuiltInDirectivesComponent]
})
export class BuiltInDirectivesModule { }
