import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "@moviesApp-shared/angular-material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

import { ToolbarComponent } from "@moviesApp-shared/components/toolbar/toolbar.component";
import { FilterComponent } from "@moviesApp-shared/components/filter/filter.component";
import { LoaderComponent } from "@moviesApp-shared/components/loader/loader.component";

import { WebStorageService } from "@moviesApp-shared/services/webStorage.service";
import { FilterPipe } from "@moviesApp-shared/pipes/filter.pipe";
import { NotificationService } from "@moviesApp-shared/services/notifications.service";

@NgModule({
  declarations: [
    ToolbarComponent,
    FilterComponent,
    LoaderComponent,
    FilterPipe
  ],
  imports: [
    AngularMaterialModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    AngularMaterialModule,
    RouterModule,
    ToolbarComponent,
    FilterComponent,
    LoaderComponent,
    FlexLayoutModule,
    FilterPipe,
    CommonModule
  ],
  providers: [WebStorageService, NotificationService]
})
export class AppSharedModule {}
