import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [ReactiveFormsModule],
  providers: [MovieService]
})
export class CoreModule {}
