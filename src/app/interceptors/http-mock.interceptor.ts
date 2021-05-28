import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Voiture } from '../models/voiture';

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);

    if (request.url == 'http://random.com/' && request.method == 'GET') {
      const body: Voiture[] = [];
      body.push(
        new Voiture(
          'azer',
          'Chevrolet - état neuf',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo non mauris augue sed varius. Justo nulla varius adipiscing malesuada aenean. Suspendisse fermentum pellentesque augue dui.',
          35000,
          25500,
          2019,
          [],
          '150V',
          'Chevrolet',
          'Diesel'
        )
      );
      return of(new HttpResponse({ status: 200, body: body }));
    }

    return next.handle(request);
  }
}
