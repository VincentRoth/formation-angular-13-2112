import { NgModule } from '@angular/core';
import { AnimalService } from './api/animal.service';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './api/time.interceptor';
import { VeterinarianService } from './api/veterinarian.service';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  exports: [MailToDirective, FormatPhonePipe, UiModule],
  imports: [HttpClientModule],
  providers: [
    AnimalService,
    VeterinarianService,
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
