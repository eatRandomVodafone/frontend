import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideComponent implements OnInit, AfterViewInit {
  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  generateURL(imgName: string) {
    return `assets/img/${imgName}`;
  }

}
