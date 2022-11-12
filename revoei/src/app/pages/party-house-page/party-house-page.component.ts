import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyHouse } from '@core/interfaces/party-house';
import { PartyHouseService } from '@core/services/party-house.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-party-house-page',
  templateUrl: './party-house-page.component.html',
  styleUrls: ['./party-house-page.component.scss']
})
export class PartyHousePageComponent implements OnInit {

  partyHouse: PartyHouse = {
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

  constructor(private route: ActivatedRoute,
              private partyHouseService: PartyHouseService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!!id)
      this.getPartyHouseByID(parseInt(id));
  }

  getPartyHouseByID(id: number) {
    this.spinner.show();
    this.partyHouseService.getByID(id).subscribe({
      next: (data: PartyHouse) => {
        this.partyHouse = data;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }
}
