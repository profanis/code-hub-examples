import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakeMeBoldOnHover]'
})
export class MakeMeBoldOnHoverDirective {
  el: HTMLElement;

  constructor(private renderer: Renderer2,
    private element: ElementRef) {
      this.el = element.nativeElement;
    }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el, "font-weight", "bold");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el, "font-weight", "normal");
  }

}


