import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './api/time.interceptor';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  exports: [MailToDirective, FormatPhonePipe],
  imports: [HttpClientModule],
  providers: [
    AnimalService,
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
