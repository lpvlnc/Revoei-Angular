import { Component, Input, OnInit } from '@angular/core';
import { Party } from '@core/interfaces/party';

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.scss']
})
export class PartyCardComponent implements OnInit {

  @Input() party: Party = {
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
