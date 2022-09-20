import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@shared/button/button.module';
import { CoreModule } from '@core/core.module';
import { InputModule } from '@shared/input/input.module';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationPageDoneComponent } from './registration-page-done/registration-page-done.component';

@NgModule({
  declarations: [
    RegistrationPageComponent,
    RegistrationPageDoneComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RegistrationPageRoutingModule,
    ButtonModule,
    InputModule
  ]
})
export class RegistrationPageModule { }
