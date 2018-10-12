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

const appRoutes: Routes = [
  { path: "",  redirectTo: "/dashboard", pathMatch: "full" },
  // { path: "reactive-form",  loadChildren: "app/modules/reactive-form/reactive-form.module#MyReactiveFormModule" },
  // { path: "basic-form",  loadChildren: "app/modules/basic-form/basic-form.module#BasicFormModule" },
  // { path: "built-in-directives",  loadChildren: "app/modules/built-in-directives/built-in-directives.module#BuiltInDirectivesModule" },
  // { path: "components-interaction",  loadChildren: "app/modules/components-interaction/components-interaction.module#ComponentsInteractionModule" },
  // { path: "components-example",loadChildren: "app/modules/day-2-components-example/day-2-components-example.module#Day2ComponentsExampleModule" },
  // { path: "basic-http-service",  loadChildren: "app/modules/http-service/http-service.module#HttpServiceModule" },
  // { path: "life-cycle-example",  loadChildren: "app/modules/lifecycle-example/lifecycle-example.module#LifecycleExampleModule" },
  // { path: "services-di",  loadChildren: "app/modules/services-di-example/services-di-example.module#ServicesDiExampleModule" },
  // { path: "templates-binding",  loadChildren: "app/modules/teampltes-data-binding/teampltes-data-binding.module#TeampltesDataBindingModule" },
  // {
  //   path: "advanced-di",
  //   loadChildren: "app/modules/advanced-di-example/advanced-di-example.module#AdvancedDiExampleModule"
  // },
  // {
  //   path: "lazy",
  //   loadChildren: "app/modules/lazy-load-guards/lazy-load-guards.module#LazyLoadGuardsModule",
  //   canLoad: [BasicCanLoadGuard]
  // }
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
    RxjsTransformOpModule
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
