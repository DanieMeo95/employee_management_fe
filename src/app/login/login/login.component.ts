import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/LoginRequest';
import { LoginService } from '../../_services/login.service';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']})
  
  export class LoginComponent implements OnInit {
    
    loginForm : FormGroup;
    
    constructor(private fb : FormBuilder, private http : HttpClient, private loginService : LoginService, private router: Router) {
      this.loginForm = this.fb.group({
        username : [''],
        password : ['']
       })
       }
       
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
       
      
       login(){
        console.log("pippo pippo")
        let loginRequest : LoginRequest = new LoginRequest();
        loginRequest.username = this.loginForm.controls['username'].value;
        loginRequest.password = this.loginForm.controls['password'].value;
        this.loginService.login(loginRequest).subscribe(
          res => { 
            console.log(res);
            localStorage.setItem('token', JSON.stringify(res)); 
            localStorage.setItem('isLoggedIn', "true");
            this.router.navigateByUrl("/pages");
           },
           
           err => {
            console.log(err);} )
  
        console.log(loginRequest);
        
       }
}