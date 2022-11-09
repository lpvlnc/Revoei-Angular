import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [TitleComponent]
})
export class TitleModule { }
