import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../model/User';
import { LoginService } from '../../_services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  user: User = new User();
  utenteForm : FormGroup;


  constructor(private loginService: LoginService, private location: Location) { }

  passwordRepeat: ValidatorFn = (form: FormGroup) => {
    if (form.controls.password && form.controls.repeatPassword) {
      if (form.controls.password.value != form.controls.repeatPassword.value) {
        return { passwordRepeat: true };
      }
    }
    return null;
  }; 
  
  public initForm (): void {
    this.utenteForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      username: new FormControl('', [ Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    }, [this.passwordRepeat]);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.user.name = this.utenteForm.controls.name.value;
    this.user.surname = this.utenteForm.controls.surname.value;
    this.user.username = this.utenteForm.controls.username.value;
    this.user.password = this.utenteForm.controls.password.value;
    console.log(this.user);
    this.loginService.addUser(this.user).subscribe((result) => {

    });
    this.location.back();
  }
}
