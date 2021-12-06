import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  exports: [MailToDirective, FormatPhonePipe],
  providers: [AnimalService],
})
export class SharedModule {}
