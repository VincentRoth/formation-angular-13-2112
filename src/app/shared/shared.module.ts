import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  exports: [MailToDirective, FormatPhonePipe],
  imports: [HttpClientModule],
  providers: [AnimalService],
})
export class SharedModule {}
