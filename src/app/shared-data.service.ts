import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  editable= true;
  tableData: any =[{
    firstName: 'dipika',
    lastName: 'ash',
    email: 'abc@mail.com', 
    number: 507333, 
    profile: 'dfsffs',
    degree:'B.sc', 
    college:'abc', 
    marks: 56},
    {
      firstName: 'dipika',
      lastName: 'ash',
      email: 'abc@mail.com', 
      number: 507333, 
      profile: 'dfsffs',
      degree:'B.sc', 
      college:'abc', 
      marks: 56},
      {
        firstName: 'dipika',
        lastName: 'ash',
        email: 'abc@mail.com', 
        number: 507333, 
        profile: 'dfsffs',
        degree:'B.sc', 
        college:'abc', 
        marks: 56}];
  constructor() { }
  getData(){
    return this.tableData;
  }
  addData(data: any){
    this.tableData.push(data);
  }
  deleteUser(data: any){
    let index = this.tableData.indexOf(data);
    this.tableData.splice(index,1);
  }
  viewUser(data: any){
    this.editable=false;
    return data;
  }
  editUser(data: any){
    return data;
  }
}
