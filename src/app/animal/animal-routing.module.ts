import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Right } from '../shared/auth/current-user.service';
import { RightGuard } from '../shared/auth/right.guard';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent,
    children: [
      { path: '', component: AnimalListComponent },
      {
        path: ':id',
        component: AnimalDetailComponent,
        canActivate: [RightGuard],
        data: {
          right: Right.ANIMAL_GET,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
