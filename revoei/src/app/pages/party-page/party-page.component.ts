import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Party } from '@core/interfaces/party';
import { PartyService } from '@core/services/party.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.scss']
})
export class PartyPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private partyService: PartyService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!!id)
      this.getPartyByID(parseInt(id));
  }

  getPartyByID(id: number) {
    this.spinner.show();
    this.partyService.getByID(id).subscribe({
      next: (data: Party) => {
        console.log(data);
      }
    }).add(() =>{
      this.spinner.hide();
    });
  }
}
