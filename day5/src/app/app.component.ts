import { Component, OnInit } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myObservable=new Observable((obs)=>{
    console.log("observable")
    obs.next("1");
    obs.next("2");
    obs.next("3");
  });
  ngOnInit() {
    this.myObservable.subscribe((val)=>{
      console.log(val);
    })
  } 
 
  title = 'day5';
  getData(data2:any){
    console.warn(data2);
    this.data.saveUser(data2).subscribe(val=>{
   console.warn(val);
    }
    )
    
  }


  info:any;
  constructor(private data :UserDataService)
  {
    this.data.users().subscribe((item)=>{
    
        this.info=item;  
    })
  }
}
