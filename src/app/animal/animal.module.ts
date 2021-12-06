import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailComponent],
})
export class AnimalModule {}
