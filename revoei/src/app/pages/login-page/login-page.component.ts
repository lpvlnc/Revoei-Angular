import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, Token } from '@core/interfaces/login';
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
    this.spinner.show();
    const login: Login = Object.assign(this.formGroup.value);
    this.loginPageService.login(login).subscribe({
      next: (response: Token) => {
        const token = response.token;
        if (!!token) {
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/home"]);
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
