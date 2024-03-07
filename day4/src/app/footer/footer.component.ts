import { Component, OnInit } from '@angular/core';
import { AccountService }  from  '../services/account.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  data3:any;
  constructor(private userData3:AccountService )
  {
    this.data3=userData3.users();
  }

  ngOnInit(): void {
  }

}
