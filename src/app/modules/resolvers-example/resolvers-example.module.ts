import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "./../../shared/shared.module";
import { BugsResolver } from "./bugs.resolver";
import { BugsService } from "./bugs.service";
import { ResolversExampleComponent } from "./resolvers-example/resolvers-example.component";

const routes: Routes = [
  {
    path: "resolvers",
    component: ResolversExampleComponent,
    resolve: {
      bugs: BugsResolver
    }
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResolversExampleComponent],
  providers: [ BugsService, BugsResolver ],
  exports: [RouterModule]
})
export class ResolversExampleModule { }
