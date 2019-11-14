import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "@moviesApp-shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ToolbarComponent } from "@moviesApp-shared/components/toolbar/toolbar.component";

import { WebStorageService } from "@moviesApp-shared/services/webStorage.service";

@NgModule({
  declarations: [ToolbarComponent],
  imports: [AngularMaterialModule, RouterModule, FlexLayoutModule],
  exports: [
    AngularMaterialModule,
    RouterModule,
    ToolbarComponent,
    FlexLayoutModule
  ],
  providers: [WebStorageService]
})
export class AppSharedModule {}
