import { Component, OnInit } from '@angular/core';
import { RevoeiDate } from '@shared/interfaces/revoei-date';
import { RevoeiDateService } from '@shared/services/revoei-date.service';

@Component({
  selector: 'app-dates-page',
  templateUrl: './dates-page.component.html',
  styleUrls: ['./dates-page.component.scss']
})
export class DatesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
