import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    console.log("Interceptor Working")
    const authToken = this.auth.getToken();
    let authReq =req;
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if(authToken!=null){
     authReq = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${authToken}`)
    });
    }
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
   
}
export const AuthInterceptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];