import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <!--<h2>
  welcome {{name}}
  </h2>
  <h1>{{2+2}}</h1> 
  <h2>{{"welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{a=2}}</h2>
  <h2>{{window.location.href}}}</h2>
  <h2>{{url}}</h2>-->

  <input [id]="myId" type="text" value="sneha">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="some">
  <input bind-disabled="true" id="{{myId}}" type="text" value="suraj">


  <h2>welcome {{name}}</h2>
  <h2 class="text-success">Infomatics</h2>
  <h2 [class]="success">Infomatics</h2>
  <h2 class="text-special" [class]="success">Infomatics</h2>
  <h2 [class.text-danger]=hasError>Infomatics</h2>
  <h2 [class]="multipleClasses">Infomatics</h2>
  <input [id]="myId" type="text" value="sneha">
  
  `,
  styles: [
    `
    .text-success{
      color: blue;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    `]
})


export class TestComponent implements OnInit {

   public name='sneha';
   public success="text-success";
   public hasError=true;
   public special=true;
   public multipleClasses = {
    "text-success": !this.hasError,
    "test-danger": this.hasError,
    "test-special": this.special
   }

   public myId="testId";
   public isDisabled=false;
  public url=window.location.href; 
  constructor() { }

  ngOnInit(): void {
  }
 /* greetUser(){
  return 'hellooo '+ this.name; 
 }*/
}
