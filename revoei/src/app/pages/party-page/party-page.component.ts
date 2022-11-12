import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Party } from '@core/interfaces/party';
import { NavbarService } from '@core/services/nav-bar.service';
import { PartyService } from '@core/services/party.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {

  party: Party = {
    id: 0,
    partyHouseId: 0,
    name: '',
    description: '',
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
      photo: '../../assets/images/parties/0.jpg'
    }
  };

  constructor(private route: ActivatedRoute,
              private partyService: PartyService,
              private spinner: NgxSpinnerService,
              private navBarService: NavbarService) { }

  ngOnInit(): void {
    this.navBarService.hide();
    const id = this.route.snapshot.paramMap.get('id');
    if(!!id)
      this.getPartyByID(parseInt(id));
  }

  getPartyByID(id: number) {
    this.spinner.show();
    this.partyService.getByID(id).subscribe({
      next: (data: Party) => {
        this.party = data;
        console.log(this.party);
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }
}
