import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalEditComponent } from './professional-edit/professional-edit.component';

const routes: Routes = [
  { path: '', component: ProfessionalComponent },
  { path: 'update', component: ProfessionalEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
