import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';

@NgModule({
  declarations: [MailToDirective],
  exports: [MailToDirective],
  providers: [AnimalService],
})
export class SharedModule {}
