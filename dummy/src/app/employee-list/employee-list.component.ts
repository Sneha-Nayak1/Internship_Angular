import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeDetail : any= {};

  constructor(private api: ApiService,  @Inject(MAT_DIALOG_DATA) public showData:any){ }

  ngOnInit(): void {
    this.employeeDetail=this.showData;
  }

}
