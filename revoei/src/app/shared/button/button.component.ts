import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = '';

  @Input() type: string = 'primary';

  @Input() href: string = '';

  @Input() icon: string = '';

  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.label = this.label.toUpperCase();
  }

}
