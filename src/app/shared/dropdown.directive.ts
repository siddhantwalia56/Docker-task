import { Directive,HostBinding,HostListener,Input } from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')open=false;
  @HostListener('click') Opentoggle(){
    this.open=!this.open;
  }
  constructor() { }

}
