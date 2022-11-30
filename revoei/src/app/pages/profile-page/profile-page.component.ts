import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@shared/interfaces/user';
import { UserService } from '@shared/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmed: false,
    profilePicture: '',
    createdAt: new Date(),
    points: 10
  };
 
  public formGroup = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  editing: boolean = false;

  constructor(private spinner: NgxSpinnerService,
              private service: UserService,
              private toastr: ToastrService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.spinner.show();
    let id = localStorage.getItem("id");
    if (id != null && id != "0") {
      this.service.getByID(parseInt(id)).subscribe({
        next: (data: User) => {
          this.user = data;
          this.formGroup.patchValue(this.user);
        }
      }).add(() =>{
        this.spinner.hide();
      });
    }
  }

  salvar() {
    this.spinner.show();
    this.user.username = this.formGroup.get('username')?.value ?? "";
    this.user.firstName = this.formGroup.get('firstName')?.value ?? "";
    this.user.lastName = this.formGroup.get('lastName')?.value ?? "";
    this.user.email = this.formGroup.get('email')?.value ?? "";
    this.service.update(this.user.id, this.user).subscribe({
      next: (data: string) => {
        this.toastr.success(data);
        this.editing = false;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

  editProfile() {
    if(this.editing){
      this.formGroup.patchValue(this.user);
      this.editing = false;
    }
    else {
      this.editing = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  back(): void {
    this.location.back();
  }
}
