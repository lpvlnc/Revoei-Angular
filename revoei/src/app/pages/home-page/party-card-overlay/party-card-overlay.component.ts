import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-card-overlay',
  templateUrl: './party-card-overlay.component.html',
  styleUrls: ['./party-card-overlay.component.scss']
})
export class PartyCardOverlayComponent implements OnInit {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() stars: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
}
