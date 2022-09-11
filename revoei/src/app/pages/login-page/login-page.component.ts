import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '@core/interfaces/login';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginPageService]
})
export class LoginPageComponent implements OnInit {

  public invalidLogin: boolean = false;

  public form = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder,
              private loginPageService: LoginPageService,
              private router: Router) { }

  ngOnInit(): void { }

  login(){
    const login: Login = Object.assign(this.form.value)
    this.loginPageService.login(login).subscribe((response: any) => {
      const token = (<any>response).token;
      if (!!token) {
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/home"]);
      }
      else
        this.invalidLogin = true;
    });
  }
}
