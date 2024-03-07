import { Component } from '@angular/core';
import {FormGroup, FormControl, FormControlName,Validators} from '@angular/forms';
import { AccountService }  from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day4';
  data3:any;
  constructor(private userData3:AccountService )
  {
    this.data3=userData3.users();
  }

  mem=[
    {name:'aaa', email:'aaa@gmail.com'},
    {name:'bbb', email:'bbb@gmail.com'},
    {name:'ccc', email:'ccc@gmail.com'},
    {name:'ddd', email:'ddd@gmail.com'}
  ]

  register=new FormGroup(
    {
      name1:new FormControl('',[Validators.required]),
      pass1:new FormControl('')
    }
  )
  loginUser2(){
    console.warn(this.register.value.name1);
  }
  get username(){
    return this.register.get('name1');
  }

  get pass1(){
    return this.register.get('pass1');
  }

  login= new FormGroup(
    {
      name:new FormControl(),
      pass: new FormControl()
    }
  )
  loginUser1(){
    console.warn(this.login.value);
  }

  /* loginUser(data:any){
    console.warn(data);
  } */
}
