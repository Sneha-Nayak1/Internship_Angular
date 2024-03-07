import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app';
 

  displayedColumns: string[] = ['productName', 'category', 'freshness', 'price', 'comment', "date", "action"];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  /* I created constructor, bcz 'dialog' has to be wrritten in constructor()  */
  constructor(private dialog:MatDialog, private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllProducts(); 
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
     width:'30%',
     height:'90%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllProducts();
      }
    })  }
 getAllProducts(){
  this.api.getProduct().subscribe(
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



editProduct(row:any){
  this.dialog.open(DialogComponent,{
    width:'30%',
    height:'90%',
    data:row,

  }).afterClosed().subscribe(val=>{
    console.log(val)
    if(val==='update'){
      this.getAllProducts();
    }
  })
}


deleteProduct(id:any){
  console.log('Deleting product with id:', id);
  this.api.deleteProduct(id).subscribe({
    next: res=>{
    
      alert("product deleted successfully");
      this.getAllProducts();
    },
    error: ()=>{
      alert("error while deleting");
    }
  })
}


// deleteProduct(id:any){
//   this.api.deleteProduct(id).subscribe((res:any) => {
//     if(res){
//       console.log(res);
//       this.getAllProducts();
//     }
//   })


// }
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
} 


editData(row:any){
  this.dialog.open(DialogComponent, {
    width:"30%",
    height:'90%',
    data:row
  })
}
}
