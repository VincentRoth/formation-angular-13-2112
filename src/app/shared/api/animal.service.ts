import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  private resourceEndpoint: string;

  constructor(private httpClient: HttpClient) {
    this.resourceEndpoint = '/api/animals/';
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.resourceEndpoint);
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(this.resourceEndpoint + id);
  }

  create(data: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(this.resourceEndpoint, data);
  }

  update(data: Animal): Observable<void> {
    return this.httpClient.put<void>(this.resourceEndpoint + data.id, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.resourceEndpoint + id);
  }
}
