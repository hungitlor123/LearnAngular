import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

export const authInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const baseUrl = environment.baseUrl;

  // Clone the request object
  let newReq = req.clone();

  newReq = req.clone({
    url: baseUrl + req.url,
  });

  return next(newReq);
};
