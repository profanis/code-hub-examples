import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { AuthenticationAsyncComponent } from "./authentication-async/authentication-async.component";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationComponent } from "./authentication/authentication.component";

const routes: Routes = [
  {path: "auth-async", component: AuthenticationAsyncComponent},
  {path: "auth", component: AuthenticationComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthenticationComponent, AuthenticationAsyncComponent],
  providers: [AuthenticationService],
  exports: [RouterModule]
})
export class AuthenticationModule { }
