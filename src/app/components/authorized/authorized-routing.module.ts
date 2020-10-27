import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedComponent } from './authorized.component';

const routes: Routes = [
  {
    path: '', component: AuthorizedComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'personal',
        loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'professional',
        loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'community',
        loadChildren: () => import('./community/community.module').then(m => m.CommunityModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'deals',
        loadChildren: () => import('./deals/deals.module').then(m => m.DealsModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
        // canActivate: [AuthGaurd]
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
        // canActivate: [AuthGaurd]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }

