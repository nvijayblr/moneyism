import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalEditComponent } from './professional-edit/professional-edit.component';


@NgModule({
  declarations: [ProfessionalComponent, ProfessionalEditComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    SharedModule
  ],
  exports: [
    ProfessionalComponent,
    ProfessionalEditComponent
  ]
})
export class ProfessionalModule { }
