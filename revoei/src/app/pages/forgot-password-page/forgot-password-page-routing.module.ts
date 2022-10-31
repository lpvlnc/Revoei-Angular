import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ForgotPasswordPageComponent } from './forgot-password-page.component'
import { PasswordRecoveryPageComponent } from './password-recovery-page/password-recovery-page.component'

const routes: Routes = [
    { 
        path: '', component: ForgotPasswordPageComponent 
    },
    {
        path: 'reset/:token', component: PasswordRecoveryPageComponent
    }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ForgotPasswordPageRoutingModule {}