import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { CoreModule } from '@core/core.module';
import { InputModule } from '@shared/input/input.module';
import { ButtonModule } from '@shared/button/button.module';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    CoreModule,
    InputModule,
    ButtonModule
  ],
  exports: [FeedbackComponent]
})
export class FeedbackModule { }
