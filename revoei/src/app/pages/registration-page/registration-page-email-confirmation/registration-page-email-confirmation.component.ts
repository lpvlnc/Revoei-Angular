import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenBase } from '@core/interfaces/login';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RegistrationPageEmailConfirmationService } from './registration-page-email-confirmation.service';

@Component({
  selector: 'app-registration-page-email-confirmation',
  templateUrl: './registration-page-email-confirmation.component.html',
  styleUrls: ['./registration-page-email-confirmation.component.scss'],
  providers: [RegistrationPageEmailConfirmationService]
})
export class RegistrationPageEmailConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private registrationPageEmailConfirmationService: RegistrationPageEmailConfirmationService,
              private toaster: ToastrService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    const tokenString = this.route.snapshot.paramMap.get('token');
    if (!!tokenString){
      const tokenObj: TokenBase = {
        token: tokenString
      }
      this.confirmEmail(tokenObj);
    }
  }

  confirmEmail(token: TokenBase) {
    this.spinner.show();
    this.registrationPageEmailConfirmationService.confirmEmail(token).subscribe({
      next: (response: string) => {
        this.toaster.success(response);
      },
      error: (err) => console.error(err),
      complete: () => {
        this.router.navigate(["/login"]);
      }
    }).add(() => {
      this.spinner.hide();
    })
  }
}
