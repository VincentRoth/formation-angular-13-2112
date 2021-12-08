import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractCrudService<T extends { id?: number }> {
  constructor(
    protected httpClient: HttpClient,
    protected resourceEndpoint: string
  ) {}

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.resourceEndpoint);
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(this.resourceEndpoint + id);
  }

  create(data: T): Observable<T> {
    return this.httpClient.post<T>(this.resourceEndpoint, data);
  }

  update(data: T): Observable<void> {
    return this.httpClient.put<void>(this.resourceEndpoint + data.id, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.resourceEndpoint + id);
  }
}
