import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { WrapperComponent } from "./wrapper/wrapper.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent,
    WrapperComponent
  ],
  exports: [WrapperComponent]
})
export class Day2ComponentsExampleModule { }
