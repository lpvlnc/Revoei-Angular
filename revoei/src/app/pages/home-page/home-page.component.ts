import { Component, Input, OnInit } from '@angular/core';
import { RevoeiDate } from '@shared/interfaces/revoei-date';
import { RevoeiDateService } from '@shared/services/revoei-date.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  search: string = "";

  allDates: RevoeiDate[] = [];
  filteredDates: RevoeiDate[] = [];
  
  constructor(private revoeiDateService: RevoeiDateService) { }

  ngOnInit(): void {
    this.revoeiDateService.get().subscribe({
      next: (data: RevoeiDate[]) => {
        this.allDates = data;
        this.filteredDates = data;
      }
    })
  }

  filter() {
    this.filteredDates = this.allDates.filter(date => date.name.includes(this.search));
  }
}
