import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { Auth } from 'aws-amplify';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptor Called')
    return from(Auth.currentSession()).pipe(
      switchMap((auth: any) => {
        // switchMap() is used instead of map().
        const jwt: string = auth.idToken.jwtToken;
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        return next.handle(authRequest);
      })
    );
  }
  
  }
