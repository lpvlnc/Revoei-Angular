import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { RegistrationPageService } from './registration-page.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [RegistrationPageService]
})
export class RegistrationPageComponent implements OnInit {

  public formGroup = this.formBuilder.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder,
              private registrationPageService: RegistrationPageService,
              private router: Router,
              private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  registration() {
    const user: User = Object.assign(this.formGroup.value);
    user.emailConfirmed = false;
    user.profilePicture = '';
    this.registrationPageService.registration(user).subscribe({
      next: (response: string) => {
        this.toaster.success(response);
      },
      error: (e) => console.error(e),
      complete: () => {
        this.router.navigate(["/registration/done/"+user.email]);
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }
}