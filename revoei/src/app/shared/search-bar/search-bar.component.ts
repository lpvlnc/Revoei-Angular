import { outputAst } from '@angular/compiler';
import { EventEmitter, Input, Output, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  expand() {
    this.expanded = !this.expanded;
    if(this.expanded){
      this.icon = 'cancel'
      this.renderer.selectRootElement("#searchBar").focus();
    }
    else
    {
      this.search = '';
      this.icon = 'search'
      this.changed();
    }
  }

  changed() {
    this.valueChange.emit(this.search);
  }

}
