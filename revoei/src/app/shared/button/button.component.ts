import { Component, HostBinding, Input, OnInit } from '@angular/core';

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

  @HostBinding('style.pointer-events') get pEvents(): string {
    if (this.disabled) {
      return 'none';
    }
    return 'auto';
  }

  constructor() { }

  ngOnInit(): void {
    this.label = this.label.toUpperCase();
  }

}
