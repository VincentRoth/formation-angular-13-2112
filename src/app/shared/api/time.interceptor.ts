import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Avant que la requête ne parte
    const startTime = Date.now();

    // La requête va partir
    return next.handle(request).pipe(
      // La requête est terminée (opérateur finalize)
      finalize(() => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(
          `${request.method} ${request.url} a mis ${elapsedTime}ms à répondre.`
        );
      })
    );
  }
}
