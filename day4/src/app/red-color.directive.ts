import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(ref:ElementRef) {
   /*  ref.nativeElement.style.color="red"
    ref.nativeElement.style.backgroundColor="skyblue"
    ref.nativeElement.style.border="2px solid black"
     */
   /*  this.renderer.setProperty(this.ref.nativeElement, 'innerHTML', 'New Content'); */
   ref.nativeElement.innerHTML="info"
   
   }

}
