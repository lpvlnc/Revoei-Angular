import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { ForgotPasswordPageRoutingModule } from './forgot-password-page-routing.module';
import { ButtonModule } from '@shared/button/button.module';
import { CoreModule } from '@core/core.module';
import { InputModule } from '@shared/input/input.module';
import { PasswordRecoveryPageComponent } from './password-recovery-page/password-recovery-page.component';

@NgModule({
  declarations: [
    ForgotPasswordPageComponent,
    PasswordRecoveryPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ForgotPasswordPageRoutingModule,
    ButtonModule,
    InputModule
  ]
})
export class ForgotPasswordPageModule { }
