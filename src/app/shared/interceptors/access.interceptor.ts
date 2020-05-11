import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { NotifierService } from 'angular-notifier';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private notifier: NotifierService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken != null) {
      request = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + accessToken),
      });
    }
    if (request.headers.get("Content-Type") == null) {
      request = request.clone({
        headers: request.headers.set("Content-Type", "application/json"),
      });
    }
    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });
    return next.handle(request).pipe(
      catchError((error) => {
        console.log(error);
        if (error.status === 401 || error.status === 403) {
          this.notifier.notify("error", "Access Denied");
          localStorage.removeItem("ACCESS_TOKEN");
          this.router.navigate(["/login"]);
          return throwError(error);
        }
        return throwError(error);
      })
    );
  }
}
