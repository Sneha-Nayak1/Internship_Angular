import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeDetail : any= {};


  constructor(private api: ApiService,  @Inject(MAT_DIALOG_DATA) public showData:any) { }

  ngOnInit(): void {
    // console.log(this.showData)
    this.employeeDetail=this.showData;
    // this.getEmployeeDetailById(this.showData);
    // if(this.showData && this.showData.id){
    // }
    
  }


//   getEmployeeDetailById(id: number) {       
//     this.api.getEmployeeById(id).subscribe((data : any) => { 
//       console.log(data);     
//       if (data) {
//         var resultData = data;
        
//           this.employeeDetail = resultData;
        
//       }
//     },
//     (error :any)=> { }); 
//   }
 }

