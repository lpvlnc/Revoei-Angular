import { Component, Input, OnInit } from '@angular/core';
import { RevoeiDate } from '@shared/interfaces/revoei-date';

@Component({
  selector: 'app-date-card-overlay',
  templateUrl: './date-card-overlay.component.html',
  styleUrls: ['./date-card-overlay.component.scss']
})
export class DateCardOverlayComponent implements OnInit {

  @Input() date: RevoeiDate = {
    id: 0,
    name: '',
    host: '',
    address: '',
    addressNumber: 0,
    addressComplement: '',
    mainPhoto: 0
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
