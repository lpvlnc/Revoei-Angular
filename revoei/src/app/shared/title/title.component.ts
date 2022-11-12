import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: string = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
  }


  back(): void {
    this.location.back();
  }
}
