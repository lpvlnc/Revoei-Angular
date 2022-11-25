import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '@core/services/nav-bar.service';
import { PartyService } from '@core/services/party.service';
import { Party } from '@shared/interfaces/party';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
    startAt: new Date(),
    endAt: undefined,
    price: 0,
    openBar: false,
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

  presenceConfirmed: boolean = false;

  constructor(private route: ActivatedRoute,
              private partyService: PartyService,
              private spinner: NgxSpinnerService,
              private navBarService: NavbarService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.navBarService.hide();
    const id = this.route.snapshot.paramMap.get('partyId');
    if(!!id && id != '0')
      this.getPartyByID(parseInt(id));
    else
      this.router.navigate(["/home"]);
  }

  getPartyByID(id: number) {
    this.spinner.show();
    this.partyService.getByID(id).subscribe({
      next: (data: Party) => {
        this.party = data;
      }
    }).add(() =>{
      this.spinner.hide();
      this.userPresenceConfirmed(parseInt(localStorage.getItem("id") ?? "0"), id);
    });
  }

  userPresenceConfirmed(userId: number, partyId: number) {
    this.spinner.show();
    this.partyService.userPresenceConfirmed(userId, partyId).subscribe({
      next: (response: boolean) => {
       this.presenceConfirmed = response;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

  confirmPresence() {
    this.spinner.show();
    this.partyService.confirmPresence(parseInt(localStorage.getItem("id") ?? "0"), this.party.id).subscribe({
      next: (response: string) => {
        this.toastr.success(response);
        this.presenceConfirmed = true;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

  cancelPresence() {
    this.spinner.show();
    this.partyService.cancelPresence(parseInt(localStorage.getItem("id") ?? "0"), this.party.id).subscribe({
      next: (response: string) => {
        this.toastr.warning(response);
        this.presenceConfirmed = false;
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }

  confirmOrCancelPresence() {
    if (this.presenceConfirmed)
      this.cancelPresence();
    else
      this.confirmPresence();
  }

  goToPartyConfirmationListPage() {
    this.router.navigate([`party-confirmation-list/${this.party.id}`]);
  }

  getPrice() {
    return this.party.price == 0 ? "Grátis" : this.party.price;
  }

  getOpenBar() {
    return this.party.openBar == false ? "Não" : "Sim";
  }
}
