import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import Carousel from '@vodafone-es/web-simplicity-2-reboot/resources/assets/scripts/es/_carousel';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideComponent implements OnInit, AfterViewInit {
  @ViewChild('templateCarousel') carouselHtml: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new Carousel(
      {
          $element: this.carouselHtml.nativeElement
      }).init(); 
  }

}
