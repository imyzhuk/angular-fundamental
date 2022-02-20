import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPasswordVisibility]'
})
export class PasswordVisibilityDirective implements  OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private _shown = false;
  ngOnInit() {
    // let eye = this.renderer.createElement("div");
    // eye.innerHTML = "maksim";
    // this.renderer.appendChild(this.el.nativeElement.parentElement, eye)
    const parent = this.el.nativeElement.parentNode;
    const span = this.renderer.createElement('i');
    this.renderer.setAttribute(span, 'class', 'fa fa-eye');
    this.renderer.listen(span, 'click', () => {
      this.toggle(span);
    })
    this.renderer.appendChild(parent, span);
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'text')
      this.renderer.setAttribute(span, 'class', 'fa fa-eye-slash');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'password')
      this.renderer.setAttribute(span, 'class', 'fa fa-eye');
    }
  }
}
