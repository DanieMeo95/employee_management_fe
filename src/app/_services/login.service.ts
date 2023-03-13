import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';


const AUTH_API = 'http://localhost:8081/auth/authenticate';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient)
  { }
  login(user:User): Observable<any> {
     return this.http.post(AUTH_API, {
      username: user.username,
      password: user.password }, 
      httpOptions);}
}
