import {Component, OnInit, AfterViewInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideComponent implements OnInit, AfterViewInit {
  @Input() img: string;
  public configSrc: object = {
    'responsive':
      {
        '0':
          {
            'breakpoint': 0,
            'elements': 1
          },
        '1':
          {
            'breakpoint': 769,
            'elements': 2
          },
        '2': {
          'breakpoint': 1025,
          'elements': 3,
          'arrows': true
        }
      },
    'build': {
      'arrows': false,
      'bullets': true,
      'clickable_bullets': true
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  generateURL(imgName: string) {
    return `assets/img/${imgName}`;
  }

}
