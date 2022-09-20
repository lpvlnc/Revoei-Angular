import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@shared/button/button.module';
import { CoreModule } from '@core/core.module';
import { InputModule } from '@shared/input/input.module';
import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './register-page.component';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RegisterPageRoutingModule,
    ButtonModule,
    InputModule
  ]
})
export class RegisterPageModule { }
