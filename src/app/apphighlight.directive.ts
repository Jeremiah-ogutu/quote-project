import { Directive, ElementRef, } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class ApphighlightDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="lightblue"
  }
  

}
