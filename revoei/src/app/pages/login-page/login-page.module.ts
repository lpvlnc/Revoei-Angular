import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { ButtonModule } from '@shared/button/button.module';
import { CoreModule } from '@core/core.module';
import { InputModule } from '@shared/input/input.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LoginPageRoutingModule,
    ButtonModule,
    InputModule
  ]
})
export class LoginPageModule { }
