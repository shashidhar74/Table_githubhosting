import { Component,Inject  } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import{MatDialog} from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  addemployee=new FormGroup({
    name: new FormControl(''),
    mail : new FormControl(''),
    number : new FormControl(''),
    add1: new FormControl(''),
    add2:new FormControl(''),
    city:new FormControl(''),
    pin:new FormControl(''),
    state:new FormControl(''),
    country:new FormControl(''),
    degree:new FormControl(''),
    cgpa:new FormControl(''),
    clg_name:new FormControl(''),
    sslc_per:new FormControl(''),
    puc_per:new FormControl(''),
    location:new FormControl('')

});
constructor(private employeeservice: EmployeeService) {}
empArray: Employee[] = [];



saveemployee(employeedata:any){
  const employeedetails = {
    name : this.addemployee.value.name ? this.addemployee.value.name : '',
    mail:this.addemployee.value.mail ? this.addemployee.value.mail :'',
    number:this.addemployee.value.number ? this.addemployee.value.number :'',
    add1:this.addemployee.value.add1 ? this.addemployee.value.add1 :'',
    add2:this.addemployee.value.add2 ? this.addemployee.value.add2 :'',
    city:this.addemployee.value.city ? this.addemployee.value.city :'',
    pin:this.addemployee.value.pin ? this.addemployee.value.pin :'',
    state:this.addemployee.value.state ? this.addemployee.value.state :'',
    country:this.addemployee.value.country ? this.addemployee.value.country :'',
    degree:this.addemployee.value.degree ? this.addemployee.value.degree :'',
    cgpa:this.addemployee.value.cgpa ? this.addemployee.value.cgpa :'',
    clg_name:this.addemployee.value.clg_name ? this.addemployee.value.clg_name :'',
    sslc_per:this.addemployee.value.sslc_per ? this.addemployee.value.sslc_per :'',
    puc_per:this.addemployee.value.puc_per ? this.addemployee.value.puc_per :'',
    location:this.addemployee.value.location ? this.addemployee.value.location :'',
  
  
  };
  console.log('save employee-',employeedetails)
  this.empArray.push(employeedetails);
   this.employeeservice.saveEmployees(this.empArray).subscribe((result:any)=>{
    console.log('--result--',result);
    
   })


 }
}




