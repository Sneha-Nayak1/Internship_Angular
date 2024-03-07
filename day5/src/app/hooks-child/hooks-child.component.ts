import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.scss']
})
export class HooksChildComponent implements OnInit,OnChanges {
 
  @Input() value: number=0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
console.log(changes);
  }

  ngOnInit(): void {
  }

}
