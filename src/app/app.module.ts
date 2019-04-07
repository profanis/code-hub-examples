import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { AdvancedDiExampleModule } from "./modules/advanced-di-example/advanced-di-example.module";
import { AdvancedDiService } from "./modules/advanced-di-example/advanced-di.service";
import { BasicFormModule } from "./modules/basic-form/basic-form.module";
import { BuiltInDirectivesModule } from "./modules/built-in-directives/built-in-directives.module";
import { ComponentsInteractionModule } from "./modules/components-interaction/components-interaction.module";
import { CssEncapsulationModule } from "./modules/css-encapsulation/css-encapsulation.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { Day2ComponentsExampleModule } from "./modules/day-2-components-example/day-2-components-example.module";
import { HttpServiceModule } from "./modules/http-service/http-service.module";
import { LifecycleExampleModule } from "./modules/lifecycle-example/lifecycle-example.module";
import { MyReactiveFormModule } from "./modules/reactive-form/reactive-form.module";
import { RxjsOrdersModule } from "./modules/rxjs-orders/rxjs-orders.module";
import { RxjsTypeaheadModule } from "./modules/rxjs-typeahead/rxjs-typeahead.module";
import { ServicesDiExampleModule } from "./modules/services-di-example/services-di-example.module";
import { TeampltesDataBindingModule } from "./modules/teampltes-data-binding/teampltes-data-binding.module";
import { VewChildModule } from "./modules/vew-child/vew-child.module";
import { RxjsTransformOpModule } from "./modules/rxjs-transform-op/rxjs-transform-op.module";
import { ScssExampleModule } from "./modules/scss-example/scss-example.module";
import { ResolversModule } from './modules/resolvers/resolvers.module';
import { PipesModule } from './modules/pipes/pipes.module';

const appRoutes: Routes = [
  { path: "",  redirectTo: "/dashboard", pathMatch: "full" },
  { path: "lazy",  loadChildren: "app/modules/lazy/lazy.module#LazyModule" }
];


export function applicationModules(): any[] {
  return [
    MyReactiveFormModule,
    BasicFormModule,
    BuiltInDirectivesModule,
    ComponentsInteractionModule,
    Day2ComponentsExampleModule,
    HttpServiceModule,
    LifecycleExampleModule,
    ServicesDiExampleModule,
    TeampltesDataBindingModule,
    CssEncapsulationModule,
    AdvancedDiExampleModule,
    RxjsTypeaheadModule,
    RxjsOrdersModule,
    VewChildModule,
    RxjsTransformOpModule,
    ScssExampleModule,
    ResolversModule,
    PipesModule
  ];
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    DashboardModule,
    applicationModules(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdvancedDiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
