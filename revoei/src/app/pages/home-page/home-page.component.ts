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
  partyAttended: Party = {
    id: 0,
    partyHouseId: 0,
    name: '',
    description: '',
    startAt: new Date(),
    endAt: undefined,
    price: 0,
    openBar: false,
    genre: '',
    upVotes: 0,
    downVotes: 0,
    stars: 0,
    photo: '../../assets/images/parties/0.jpg',
    partyHouse: {
      id: 0,
      cnpj: '',
      name: '',
      description: '',
      neighborhood: '',
      postalCode: '',
      city: '',
      fu: '',
      address: '',
      addressNumber: 0,
      addressComplement: '',
      phone: '',
      photo: '../../assets/images/parties/0.jpg'
    }
  };
  
  constructor(private partyService: PartyService,
              private spinner: NgxSpinnerService,
              private navBarService: NavbarService) { }

  ngOnInit(): void {
    this.navBarService.show();
    this.getParties();
    this.getPartyAttended();
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

  getPartyAttended() {
    if (localStorage.getItem('feedbackEnviado') != 'Sim'){
      this.spinner.show();
      let id = localStorage.getItem("id");
      if (id != null && id != "0") { 
        this.partyService.getPartiesAttended(parseInt(id)).subscribe({
          next: (data: Party) => {
            this.partyAttended = data;
          }
        }).add(() =>{
          this.spinner.hide();
        });
      }
    }
  }

  filter() {
    this.filteredParties = this.allParties.filter(party => party.name.includes(this.search));
  }

  searchChanged(value: string) {
    this.search = value;
    this.filter();
  }
}
