import { Component, OnInit } from '@angular/core';
import { NavbarService } from '@core/services/nav-bar.service';
import { PartyService } from '@core/services/party.service';
import { Party } from '@shared/interfaces/party';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  search: string = "";
  allParties: Party[] = [];
  filteredParties: Party[] = [];
  
  constructor(private partyService: PartyService,
              private spinner: NgxSpinnerService,
              private navBarService: NavbarService) { }

  ngOnInit(): void {
    this.navBarService.show();
    this.getParties();
  }

  getParties() {
    this.spinner.show();
    this.partyService.get().subscribe({
      next: (data: Party[]) => {
        this.allParties = data;
        this.filteredParties = data;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

  filter() {
    this.filteredParties = this.allParties.filter(party => party.name.includes(this.search));
  }

  searchChanged(value: string) {
    this.search = value;
    this.filter();
  }
}
