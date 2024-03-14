import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name:any;
  // getName(){
  //   this.name = prompt('Please enter your name:');
  
  // }

  // data:any;
  // value:any;

  // getDetails(val:any){
  //  this.value=val;
  // }

  // show=true;
  // color="red";

  // name=['sneha','raksha','srujana'];

  // details=[
  //   {name:'sneha', age:7, color:['red','blue']},
  //   {name:'srujana', age:17, color:['pink','green']},
  //   {name:'raksha', age:37, color:['purple','yellow']}
  // ]

  data:any={};
  submit(val:NgForm){
    this.data=val
  }
}
