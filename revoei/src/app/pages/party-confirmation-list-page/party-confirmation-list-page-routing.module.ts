import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PartyConfirmationListPageComponent } from './party-confirmation-list-page.component'

const routes: Routes = [{ path: '', component: PartyConfirmationListPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartyConfirmationListRoutingModule {}