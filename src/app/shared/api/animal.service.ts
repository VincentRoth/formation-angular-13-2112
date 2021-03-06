import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';
import { Animal } from './animal';

@Injectable()
export class AnimalService extends AbstractCrudService<Animal> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '/api/animals/');
  }
}
