import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '@core/services/nav-bar.service';
import { UserPartyConfirmationDTO } from '@shared/interfaces/user-party-confirmation';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { PartyConfirmationListService } from './party-confirmation-list.service';

@Component({
  selector: 'app-party-confirmation-list-page',
  templateUrl: './party-confirmation-list-page.component.html',
  styleUrls: ['./party-confirmation-list-page.component.scss']
})
export class PartyConfirmationListPageComponent implements OnInit {

  confirmationList: UserPartyConfirmationDTO[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private navBarService: NavbarService,
              private spinner: NgxSpinnerService,
              private partyConfirmationListService: PartyConfirmationListService) { }

  ngOnInit(): void {
    this.navBarService.hide();
    this.getPartyConfirmationList()
  }

  getPartyConfirmationList() {
    const partyId = this.route.snapshot.paramMap.get('partyId');
    if(!!partyId && partyId != '0') {
      this.spinner.show();
      this.partyConfirmationListService.getPartyConfirmationList(parseInt(partyId)).subscribe({
        next: (data: UserPartyConfirmationDTO[]) => {
          console.log(data);
          this.confirmationList = data;
        }
      }).add(() =>{
        this.spinner.hide();
      });
    }
    else
      this.router.navigate(["/home"]);
  }
}
