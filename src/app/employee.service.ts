import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { Employee } from './employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url='http://localhost:3000/employees';
constructor(private http:HttpClient){}
getAllemp(){
  return this.http.get(this.url)
}
  saveEmployees(employees: Employee[]) : any {
    console.log('--employees-service--',employees);
    return this.http.post(this.url,employees);

    
  }
  }
  
  


