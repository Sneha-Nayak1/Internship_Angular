import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'day3';
  loginUser(data:any){
    console.warn(data);
  }

  pipe="infomatics mangalore"
  today=Date();
  user1={
    name:'sneha',age:21
    
  };

  data3:number | string=7;
 

  data2:any;

  data1='x';
  updateData(item:string){
    this.data1=item;
  }

  user=[
    {name:'sneha', email:'abc@gmail.com'},
    {name:'suraj', email:'def@gmail.com'},
    {name:'dhanya', email:'ghi@gmail.com'},
    {name:'deepa', email:'jkl@gmail.com'},
  ]

  data=7;
  update(){
    this.data=Math.floor(Math.random()*10);
  }

  tasks:any[]=[];
  addTask(item:string){
   // console.warn(item);
    this.tasks.push({id:this.tasks.length, name:item})
  }
  remove(id:number){
    this.tasks=this.tasks.filter(data=>data.id!==id);
  }

  display=true;
  toggle(){
    this.display=!this.display;
  }
}
