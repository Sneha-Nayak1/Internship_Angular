import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'address', 'phoneNumber', 'designation', "dateOfJoining", "action"];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;





  constructor(public dialog: MatDialog,private api:ApiService, private router: Router) {}


  ngOnInit(): void {
    this.getAllEmployees(); 
  }


  openDialog() {
 
    this.dialog.open(DialogComponent, {
      width:"30%",
      height:'90%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllEmployees();
      }
    })
  }
 
  getAllEmployees(){
    this.api.getEmployee().subscribe(
      {
        next : (res)=>{
          this.dataSource=new  MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        },
        error: ()=>{
          alert("Error in fetching the data");
        }
      
    })
  }


  editEmployee(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      height:'90%',
      data:row,
  
    }).afterClosed().subscribe(val=>{
      console.log(val)
      if(val==='update'){
        this.getAllEmployees();
      }
    })
  }
  
  
  delete(id:any){
    this.api.deleteEmployee(id).subscribe({
      next: res=>{
      
        alert("employee details deleted successfully");
        this.getAllEmployees();
      },
      error: ()=>{
        alert("error while deleting");
      }
    })
  }
  
  getById(row:any){
    this.dialog.open(EmployeeListComponent,{
      width:'30%',
      height:'40%',
      data:row
  
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
