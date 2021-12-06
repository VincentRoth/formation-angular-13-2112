import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimalDetailComponent } from './animal/animal-detail/animal-detail.component';
import { AnimalModule } from './animal/animal.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AnimalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
