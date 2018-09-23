import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { AdvancedCiComponent } from './advanced-ci/advanced-ci.component';
import { AdvancedDiService } from './advanced-di.service';

const routes: Routes = [
  {path: "advanced-di", component: AdvancedCiComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvancedCiComponent],
  exports: [RouterModule],
  // providers: [AdvancedDiService]
})
export class AdvancedDiExampleModule { }
