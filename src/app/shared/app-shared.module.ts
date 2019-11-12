import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "./angular-material.module";
import { RouterModule } from "@angular/router";

import { LeftNavigationComponent } from "./components/left-navigation/left-navigation.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

import { WebStorageService } from "./services/webStorage.service";

@NgModule({
  declarations: [LeftNavigationComponent, ToolbarComponent],
  imports: [AngularMaterialModule, RouterModule],
  exports: [
    AngularMaterialModule,
    RouterModule,
    LeftNavigationComponent,
    ToolbarComponent
  ],
  providers: [WebStorageService]
})
export class AppSharedModule {}
