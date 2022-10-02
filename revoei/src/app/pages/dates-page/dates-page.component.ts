import { Component, OnInit } from '@angular/core';
import { RevoeiDate } from '@shared/interfaces/revoei-date';
import { RevoeiDateService } from '@shared/services/revoei-date.service';

@Component({
  selector: 'app-dates-page',
  templateUrl: './dates-page.component.html',
  styleUrls: ['./dates-page.component.scss']
})
export class DatesPageComponent implements OnInit {

  dates: RevoeiDate[] = [];

  constructor(private revoeiDateService: RevoeiDateService) { }

  ngOnInit(): void {
    this.revoeiDateService.get().subscribe({
      next: (data: RevoeiDate[]) => {
        this.dates = data;
        console.log(this.dates);
      }
    })
  }

}
