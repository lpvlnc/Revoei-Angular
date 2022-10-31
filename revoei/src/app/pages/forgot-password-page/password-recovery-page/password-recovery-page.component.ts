import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordModel } from '@core/interfaces/login';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PasswordRecoveryPageService } from './password-recovery-page.service';

@Component({
  selector: 'app-password-recovery-page',
  templateUrl: './password-recovery-page.component.html',
  styleUrls: ['./password-recovery-page.component.scss'],
  providers: [PasswordRecoveryPageService]
})
export class PasswordRecoveryPageComponent implements OnInit {

  tokenValid: boolean = false;
  public formGroup = this.formBuilder.group({
    password: new FormControl('', [Validators.required]),
    passwordConfirmation: new FormControl('', [Validators.required])
  });
  constructor(private route: ActivatedRoute,
              private service: PasswordRecoveryPageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.passwordRecoveryTokenValid();
  }

  passwordRecoveryTokenValid() {
    this.spinner.show();
    const tokenString = this.route.snapshot.paramMap.get('token');
    if (!!tokenString) {
      this.service.passwordRecoveryTokenValid(tokenString).subscribe({
        next: (response: boolean) => {
          this.tokenValid = response;
          if (!this.tokenValid)
            this.router.navigate(["/login"]);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {

        }
      }).add(() => {
        this.spinner.hide();
      })
    }
  }

  resetPassword() {
    this.spinner.show();
    if (this.formGroup.valid) {
      const password = this.formGroup.get('password')?.value;
      const passwordConfirmation = this.formGroup.get('passwordConfirmation')?.value;
      const tokenString = this.route.snapshot.paramMap.get('token');
      if (!!password && !!passwordConfirmation && !!tokenString) {
        const model: ResetPasswordModel = {
          password: password,
          passwordConfirmation: passwordConfirmation,
          token: tokenString
        }
        this.service.resetPassword(model).subscribe({
          next: (response: string) => {
            this.toastr.success(response);
          },
          error: (err) => {
            console.error(err);
          },
          complete: () => {

          }
        }).add(() => {
          this.spinner.hide();
        });
      }
    }
    
    
  }
}
