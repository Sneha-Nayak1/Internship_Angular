import { Component,Inject,  OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  actionBtn:string='Save';

  employeeForm !:FormGroup;  
  constructor(private formBuilder: FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<DialogComponent>) { }





  ngOnInit(): void {
    this.employeeForm=this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      phoneNumber:['', Validators.required],
      designation:['',Validators.required],
      dateOfJoining:['',Validators.required]
    })

    if(this.editData){
      this.actionBtn='Update';
      this.employeeForm.controls['firstName'].setValue(this.editData.firstName);
      this.employeeForm.controls['lastName'].setValue(this.editData.lastName);
      this.employeeForm.controls['email'].setValue(this.editData.email);
      this.employeeForm.controls['address'].setValue(this.editData.address);
      this.employeeForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
      this.employeeForm.controls['designation'].setValue(this.editData.designation);
      this.employeeForm.controls['dateOfJoining'].setValue(this.editData.dateOfJoining);
    }
  }


  addEmployee(){
    if(!this.editData){
      if(this.employeeForm.valid){
        this.api.postEmployee(this.employeeForm.value).subscribe(
          {
            next : (res) =>{alert("Employee details added sucessfully")
           this.employeeForm.reset(),
           this.dialogRef.close('save');
           
          } ,
          
          error:()=>
            alert("Error while adding")
          }
  
      )
      }
    }else{
      this.updateEmployee()
    }
  }

  updateEmployee(){
      this.api.putEmployee(this.employeeForm.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("Employee details updated successfully");
          this.employeeForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("error while updating a record ")
        }
      })
  }

}
     


