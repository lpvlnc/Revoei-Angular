import { Component, OnInit } from '@angular/core';
import { DateDTO } from '@shared/interfaces/party';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatesPageService } from './dates-page.service';

@Component({
  selector: 'app-dates-page',
  templateUrl: './dates-page.component.html',
  styleUrls: ['./dates-page.component.scss']
})
export class DatesPageComponent implements OnInit {

  dates: DateDTO[] = [];

  constructor(private spinner: NgxSpinnerService,
              private service: DatesPageService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getDates(parseInt(localStorage.getItem("id") ?? "0")).subscribe({
      next: (data: DateDTO[]) => {
        this.dates = data;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

}
