import { Component, OnInit, /* Input */ Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() data=new EventEmitter<string>()

  constructor() { }
  /* @Input() item=0 */
 /*  @Input() item1:{name:string,email:string}={name:'',email:''} */

  ngOnInit(): void {
  }

}
