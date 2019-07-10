import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() img: string;
  @Input() textBold: string;
  @Input() category: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  generateURL(imgName: string) {
    return `assets/img/${imgName}`;
  }

}
