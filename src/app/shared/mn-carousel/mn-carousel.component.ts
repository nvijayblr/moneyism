import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-mn-carousel',
  templateUrl: './mn-carousel.component.html',
  styleUrls: ['./mn-carousel.component.scss']
})
export class MnCarouselComponent implements OnInit {

  @Input() items = [];
  @Input() title = '';

  OwlOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplaySpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 0,
    navSpeed: 700,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    items: 3,
    nav: false,
  };
  isCarouselFor1stTabVisible = false;
  appConfig: any = {};

  constructor() {
    this.appConfig = appConfig;
  }

  ngOnInit() {
  }

  isImage(path) {
    if (path && path.indexOf('.jpg') > 0 || path.indexOf('.jpeg') > 0 || path.indexOf('.png') > 0 || path.indexOf('.gif') > 0) {
      return true;
    }
    return false;
  }

  isFile(path) {
    if (!path) {
      return false;
    }
    if (path && path.indexOf('.jpg') < 0 && path.indexOf('.jpeg') < 0 && path.indexOf('.png') < 0 && path.indexOf('.gif') < 0) {
      return true;
    }
    return false;
  }

}
