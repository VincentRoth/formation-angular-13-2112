import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';

@NgModule({
  providers: [AnimalService],
})
export class SharedModule {}
