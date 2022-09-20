import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-page-done',
  templateUrl: './registration-page-done.component.html',
  styleUrls: ['./registration-page-done.component.scss']
})
export class RegistrationPageDoneComponent implements OnInit {

  email: string = '';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') ?? '';
  }

}
