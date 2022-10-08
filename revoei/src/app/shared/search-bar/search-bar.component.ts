import { outputAst } from '@angular/compiler';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  expanded: boolean = false;
  icon: string = 'search'
  search: string = '';
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.expanded = !this.expanded;
    if(this.expanded){
      this.icon = 'cancel'
    }
    else
    {
      this.icon = 'search'
    }
  }

  changed() {
    this.valueChange.emit(this.search);
  }

}
