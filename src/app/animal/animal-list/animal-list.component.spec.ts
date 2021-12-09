import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from '../../shared/api/animal.service';
import { AnimalItemComponent } from '../animal-item/animal-item.component';

import { AnimalListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalItemComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AnimalService],
    }).compileComponents();
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty list for no animals', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals/');
    expect(requestCtrl.request.method).toEqual('GET');

    expect(component.animals).toBeUndefined();

    requestCtrl.flush([]);

    expect(component.animals).toEqual([]);

    httpCtrl.verify();

    const template = fixture.nativeElement as HTMLElement;
    expect(template.querySelectorAll('li')?.length).toBe(0);
  });
});
