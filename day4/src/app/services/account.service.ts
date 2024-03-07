import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
users(){
  return [
    {name:'sneha', age:10},
    {name:'suraj', age:20}
  ]
}
  constructor() { }
}
