import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, LoginResponse } from '@core/interfaces/login';
import { NavbarService } from '@core/services/nav-bar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginPageService]
})
export class LoginPageComponent implements OnInit {

  public invalidLogin: boolean = false;

  public formGroup = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder,
              private loginPageService: LoginPageService,
              private router: Router,
              private navBarService: NavbarService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void { 
    this.navBarService.hide();
  }

  login(){
    if (!this.formGroup.valid)
      return;
    this.spinner.show();
    const login: Login = Object.assign(this.formGroup.value);
    this.loginPageService.login(login).subscribe({
      next: (response: LoginResponse) => {
        if (!!response && !!response.token) {

          localStorage.setItem("id", response.id.toString());
          localStorage.setItem("username", response.username);

          const tokenObj = response.token;
          localStorage.setItem("jwt", response.token.token);
          localStorage.setItem("minutes_till_expires", tokenObj.minutesTillExpires.toString());

          var refreshDate = new Date();
          refreshDate.setTime(refreshDate.getTime() + ((tokenObj.minutesTillExpires / 2) * 60 * 1000));
          localStorage.setItem("jwt_refresh", ""+refreshDate.getTime());

          var expireDate = new Date();
          expireDate.setTime(expireDate.getTime() + (tokenObj.minutesTillExpires * 60 * 1000));
          localStorage.setItem("jwt_expire", ""+expireDate.getTime());

          this.invalidLogin = false;
          this.router.navigate(["/home"]);
          console.log(localStorage);
        }
      },
      error: (e) => {
        this.invalidLogin = true
        console.error(e);
      }
    }).add(() => {
      this.spinner.hide();
    })
  }

  forgotPassword() {

  }

  redirectToRegistrationPage() {
    this.router.navigate(["/registration"]);
  }
}
