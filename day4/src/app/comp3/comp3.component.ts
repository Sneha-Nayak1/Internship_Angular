import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  userId:string |null=null;
  name:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn("user id is : ",this.route.snapshot.paramMap.get('id'))
    this.userId=this.route.snapshot.paramMap.get('id')
    this.name=this.route.snapshot.paramMap.get('name')
  }

}
