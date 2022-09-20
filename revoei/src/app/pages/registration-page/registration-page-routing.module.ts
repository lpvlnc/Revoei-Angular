import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegistrationPageDoneComponent } from './registration-page-done/registration-page-done.component'
import { RegistrationPageComponent } from './registration-page.component'

const routes: Routes = [
    { 
        path: '', component: RegistrationPageComponent
    },
    {
        path: 'done/:email', component: RegistrationPageDoneComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}