import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "@moviesApp-shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { LeftNavigationComponent } from "@moviesApp-shared/components/left-navigation/left-navigation.component";
import { ToolbarComponent } from "@moviesApp-shared/components/toolbar/toolbar.component";

import { WebStorageService } from "@moviesApp-shared/services/webStorage.service";

@NgModule({
  declarations: [LeftNavigationComponent, ToolbarComponent],
  imports: [AngularMaterialModule, RouterModule, FlexLayoutModule],
  exports: [
    AngularMaterialModule,
    RouterModule,
    LeftNavigationComponent,
    ToolbarComponent,
    FlexLayoutModule
  ],
  providers: [WebStorageService]
})
export class AppSharedModule {}
