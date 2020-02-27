import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  template: `
    <ng-template>
        <ng-content></ng-content>
    </ng-template>
  `,
})
export class CarouselItemComponent {


  @ViewChild(TemplateRef, {static: true}) template: TemplateRef<any>;

}
