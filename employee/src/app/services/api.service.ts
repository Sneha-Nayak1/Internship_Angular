import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8084/api/employees';
  private baseUrl2 = 'http://localhost:8084/api/employees/byId';
  constructor(private http: HttpClient) { }
  getEmployee(){
    return this.http.get<any>(`${this.baseUrl}`);
  }
  // return this.http.get<any>(`/api/employees/${id}`);

  getEmployeeById( id:number){
    return this.http.get<any>(`${this.baseUrl2}/${id}`);
  }



  postEmployee(data: any){
  return this.http.post<any>(`${this.baseUrl}`,data);
}


putEmployee(data:any,id:number){
  return this.http.post<any>(`${this.baseUrl}/${id}`, data);
}


deleteEmployee(id:any){
    return this.http.get(`${this.baseUrl}/${id}`);
}


}
