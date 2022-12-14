import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
