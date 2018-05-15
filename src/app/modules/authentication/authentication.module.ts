import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AuthenticationService } from "./authentication.service";
import { AuthenticationComponent } from "./authentication/authentication.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticationComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
