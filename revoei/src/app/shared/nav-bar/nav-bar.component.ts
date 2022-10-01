import { Component, OnInit } from '@angular/core';
import { NavbarService } from '@core/services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public navBarService: NavbarService) { 
  }

  ngOnInit(): void {
  }

}
