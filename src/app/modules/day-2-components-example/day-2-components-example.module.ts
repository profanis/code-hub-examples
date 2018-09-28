import { NgModule } from "@angular/core";

import { SharedModule } from "./../../shared/shared.module";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: "components-example", component: WrapperComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    WrapperComponent
  ],
  exports: [RouterModule, WrapperComponent]
})
export class Day2ComponentsExampleModule { }
