import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url="http://localhost:5500/db.json"
  
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url)
  }
  saveUser(item:any){
    return this.http.post(this.url, item)
  }
}
