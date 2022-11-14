import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Party } from '@core/interfaces/party';
import { PartyHouse } from '@core/interfaces/party-house';
import { NavbarService } from '@core/services/nav-bar.service';
import { PartyHouseService } from '@core/services/party-house.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SwiperOptions } from 'swiper';

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
    phone: '',
    photo: '../../assets/images/parties/0.jpg'
  }

  parties: Party[] = [{
    id: 0,
    partyHouseId: 0,
    name: 'festa',
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
      phone: '',
      photo: '../../assets/images/parties/0.jpg'
    }
  },
  {
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
      phone: '',
      photo: '../../assets/images/parties/0.jpg'
    }
  }];

  public swiperConfig: SwiperOptions = {
    centeredSlides: true,
    autoplay: false,
    navigation: false,
    speed: 800,
    spaceBetween: 16,
    width: 250,
    rewind: true
  };

  constructor(private route: ActivatedRoute,
              private partyHouseService: PartyHouseService,
              private spinner: NgxSpinnerService,
              private navBarService: NavbarService,
              private router: Router) { }

  ngOnInit(): void {
    this.navBarService.hide();
    const id = this.route.snapshot.paramMap.get('id');
    if(!!id && id != '0')
      this.getPartyHouseByID(parseInt(id));
    else
      this.router.navigate(["/home"]);
  }

  getPartyHouseByID(id: number) {
    this.spinner.show();
    this.partyHouseService.getByID(id).subscribe({
      next: (data: PartyHouse) => {
        this.partyHouse = data;
        this.partyHouse.postalCode = this.partyHouse.postalCode.replace(/^(\d{0,5})(\d{0,3})/, "$1-$2");
        this.partyHouse.phone = this.partyHouse.phone.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, "($1) $2 $3-$4");
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

  getAddress(): string {
    return `${this.partyHouse.address}, ${this.partyHouse.addressNumber} - ${this.partyHouse.neighborhood}, ${this.partyHouse.city} - ${this.partyHouse.fu}, ${this.partyHouse.postalCode}`
  }
}
