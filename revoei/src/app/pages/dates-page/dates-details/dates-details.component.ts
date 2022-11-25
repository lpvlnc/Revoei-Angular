import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dates-details',
  templateUrl: './dates-details.component.html',
  styleUrls: ['./dates-details.component.scss']
})
export class DatesDetailsComponent implements OnInit {

  @Input() id: number = 0;

  constructor(private router: Router,
              private clipboard: Clipboard,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  goToPartyPage() {
    this.router.navigate([`party/${this.id}`]);
  }

  goToConfirmationListPage() {
    this.router.navigate([`party-confirmation-list/${this.id}`]);
  }

  share() {
    this.clipboard.copy(`localhost:4200/party/${this.id}`);
    this.toastr.success('Link da festa copiado.');
  }
}
