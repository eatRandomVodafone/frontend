import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

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
    // new SvgLoader().loadAndAppendSvgToAngular(this.el.nativeElement, this.version, this.pathSVG);
  }
}
