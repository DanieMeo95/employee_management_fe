import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { LoginRequest } from "../model/LoginRequest";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(loginRequest: LoginRequest): Observable<any> {
    let httpHeaders = new HttpHeaders({

      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    
    let options = {
      headers: httpHeaders
    };

    return this.http.post(environment.apiUrl + "/auth/authenticate", loginRequest, options);
    
  }
}
