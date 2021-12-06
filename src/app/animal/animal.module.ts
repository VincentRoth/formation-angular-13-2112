import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [CommonModule],
  exports: [AnimalDetailComponent],
})
export class AnimalModule {}
