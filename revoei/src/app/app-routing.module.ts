import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration-page/registration-page.module').then((m) => m.RegistrationPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'dates',
    loadChildren: () => import('./pages/dates-page/dates-page.module').then((m) => m.DatesPageModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
