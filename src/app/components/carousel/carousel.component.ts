import {
  AfterViewInit,
  ViewChild,
  Component,
  Input,
  OnInit,
  ViewEncapsulation, ElementRef,
  ContentChildren, QueryList,
} from '@angular/core';

import Carousel from './fn-carousel';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ContentChildren(CarouselItemComponent) public itemsCarousel: QueryList<CarouselItemComponent>;
  @ViewChild('carousel', {static: true}) el: ElementRef;

  @Input() config: any;
  @Input() responsiveSize: number;
  private _carousel: Carousel;


  constructor() {
  }

  ngOnInit() {
    console.log(this.itemsCarousel);
  }

  ngAfterViewInit() {
    this._carousel = new Carousel({
      $element: this.el.nativeElement,
      config: this.config
    });
    this._carousel.init();
  }
}
