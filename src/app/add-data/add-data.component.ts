import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {
  // cvForm: FormGroup; 
  value: any={};
  userData?: any = {};
  editable?: boolean;
  constructor(private sharedDataService: SharedDataService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router){
                // console.log(this.router.getCurrentNavigation()?.extras.state?.['user']);
                this.userData = this.router.getCurrentNavigation()?.extras.state?.['user'];
                this.editable = this.router.getCurrentNavigation()?.extras.state?.['edit']!== undefined ? this.router.getCurrentNavigation()?.extras.state?.['edit']:true;
                this.patchValues();
              }

  cvList: any=[];
    cvForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      number: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      profile: new FormControl(null, Validators.required),
      degree: new FormControl(null, Validators.required),
      college: new FormControl(null, Validators.required),
      marks: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{2}")])
    });
    
    patchValues(){
      this.cvForm.patchValue({
        firstName: this.userData?.firstName,
        lastName: this.userData?.lastName,
        email: this.userData?.email,
        number: this.userData?.number,
        profile:this.userData?.profile,
        degree: this.userData?.degree,
        college: this.userData?.college,
        marks: this.userData?.marks
      });
    }
ngOnInit(){
}
onPrint(){
  window.print();
}
onSubmit(){
  console.log(this.cvForm.value, typeof(this.cvForm.value.firstName));
  this.sharedDataService.addData(this.cvForm.value);
  this.toastr.success("Resume saved Successfully","Done!")
  this.cvForm.reset();
}
}
