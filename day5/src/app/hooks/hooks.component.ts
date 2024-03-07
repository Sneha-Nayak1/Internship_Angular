import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {
  
count:number=0;
  constructor() { }
  counter(){
      this.count++;
  }

  ngOnInit(): void {
  }

}
