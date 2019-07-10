import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import SvgLoader from '@vodafone-es/web-simplicity-2-reboot/resources/assets/scripts/es/_svg-loader';

@Directive({
  selector: '[appSvgSpritesheet]'
})
export class SvgSpritesheetDirective implements AfterViewInit {

  @Input() version: string;
  @Input() pathSVG: string;
  constructor(
    private el: ElementRef
  ) {
  }
  ngAfterViewInit() {
    new SvgLoader().loadAndAppendSvgToAngular(this.el.nativeElement, this.version, this.pathSVG);
  }
}
