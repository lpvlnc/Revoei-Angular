import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() id: string = '';
  
  @Input() label?: string;

  @Input() control = new FormControl('');

  @Input() type = 'text';

  @Input() maxlength: string = "";

  @Input() disabled: boolean = false;

  errorMessages: Record<string, string> = {
    required: "The field is required"
  }
  
  constructor() {
    
  }
}
