import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';
import { Veterinarian } from './veterinarian';

@Injectable()
export class VeterinarianService extends AbstractCrudService<Veterinarian> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '/api/veterinarians/');
  }
}
