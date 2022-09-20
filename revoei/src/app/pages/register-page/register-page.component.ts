import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { RegisterPageService } from './register-page.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  providers: [RegisterPageService]
})
export class RegisterPageComponent implements OnInit {

  public formGroup = this.formBuilder.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder,
              private registerPageService: RegisterPageService,
              private router: Router,
              private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    const user: User = Object.assign(this.formGroup.value);
    user.emailConfirmed = false;
    user.profilePicture = '';
    this.registerPageService.register(user).subscribe({
      next: (response: string) => {
        this.toaster.success(response);
      },
      error: (e) => console.error(e),
      complete: () => {
        this.redirectToLogin();
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }
}
