import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  dataList: any;
  constructor(private sharedDataService: SharedDataService,
              private router: Router){}
ngOnInit(){
  this.getDataList();
}

onView(selectedUser: any){
 this.router.navigate(['/addData'], {state: 
  {user: selectedUser,
   edit: false}
 });
}

onEdit(selectedUser: any){
  this.router.navigate(['/addData'], {state: 
    {user: selectedUser,
     edit: true}
   });
}

onDelete(selectedUser: any){
console.log(selectedUser);
this.sharedDataService.deleteUser(selectedUser);
this.getDataList();
}

getDataList(){
  this.dataList = this.sharedDataService.getData();
}
}
