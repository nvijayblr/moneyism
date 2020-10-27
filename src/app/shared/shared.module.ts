import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from 'ng-starrating';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CategoryIconPipe } from './../services/categoryicon.pipe';
import { MnCarouselComponent } from './mn-carousel/mn-carousel.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageCropperModule,
    CarouselModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    RatingModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    ImageCropperComponent,
    ConfirmDialogComponent,
    CategoryIconPipe,
    MnCarouselComponent,
    AccountDetailsComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropperModule,
    CarouselModule,
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    ImageCropperComponent,
    ConfirmDialogComponent,
    AccountDetailsComponent,
    MnCarouselComponent,
    CategoryIconPipe,
    RatingModule,
  ],
  providers: [DatePipe],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule {}
