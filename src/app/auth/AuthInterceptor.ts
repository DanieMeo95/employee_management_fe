import { HTTP_INTERCEPTORS, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token') || '';
        const httpRequest = req.clone({ //eseguo il clone perchè è readonly      
        headers: req.headers.append('Authorization', `Bearer ${token}`)});

        console.log(token, "token")
        console.log(req.headers, "headers");
        console.log("http request", httpRequest); 
        return next.handle(httpRequest);
    }
}