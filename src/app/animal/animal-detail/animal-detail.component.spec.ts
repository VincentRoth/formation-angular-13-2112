import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from '../../shared/api/animal.service';
import { FormatPhonePipe } from '../../shared/format-phone.pipe';
import { MailToDirective } from '../../shared/mail-to.directive';

import { AnimalDetailComponent } from './animal-detail.component';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent, MailToDirective, FormatPhonePipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AnimalService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
