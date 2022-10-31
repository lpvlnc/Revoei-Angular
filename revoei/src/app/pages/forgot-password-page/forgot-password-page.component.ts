import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordPageService } from './forgot-password-page.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  public formGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private formBuilder: FormBuilder,
              private service: ForgotPasswordPageService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  sendPasswordRecoveryEmail() {
    if (this.formGroup.valid) {
      this.spinner.show();
      const email = this.formGroup.get('email')?.value;
      if (!!email) {
        this.service.sendPasswordRecoveryEmail(email).subscribe({
          next: () => {
            this.toastr.success("A password recovery email has been sended to you.")
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
