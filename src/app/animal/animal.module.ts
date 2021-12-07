import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalItemComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AnimalDetailComponent, AnimalListComponent],
})
export class AnimalModule {}
