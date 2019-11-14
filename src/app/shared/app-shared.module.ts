import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "@moviesApp-shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

import { ToolbarComponent } from "@moviesApp-shared/components/toolbar/toolbar.component";
import { FilterComponent } from "@moviesApp-shared/components/filter/filter.component";

import { WebStorageService } from "@moviesApp-shared/services/webStorage.service";
import { FilterPipe } from "@moviesApp-shared/pipes/filter.pipe";
import { NotificationService } from "@moviesApp-shared/services/notifications.service";

@NgModule({
  declarations: [ToolbarComponent, FilterComponent, FilterPipe],
  imports: [
    AngularMaterialModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularMaterialModule,
    RouterModule,
    ToolbarComponent,
    FilterComponent,
    FlexLayoutModule,
    FilterPipe
  ],
  providers: [WebStorageService, NotificationService]
})
export class AppSharedModule {}
