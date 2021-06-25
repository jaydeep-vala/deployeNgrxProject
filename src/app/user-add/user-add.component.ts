import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  
  // @Input() HERO: any

    @Output() getName:EventEmitter<any>=new EventEmitter()
    show="green";
  


  myReactiveForm: FormGroup = new FormGroup({});
  user: {
    userId: string,
    Title:string,
    completed:string,
    // phone:number,
    // address:string,
    // country:string
  }[]=[];
  user1 = JSON.parse(localStorage.getItem('Users') || '{}');
  
  constructor(alertConfig: NgbAlertConfig,private userservice:UserDataService) {
      alertConfig.type = 'success';
      // console.log(this.HERO)
      // alertConfig.dismissible = false;
      
    } 
    
    
    ngOnInit(): void {
      this.myReactiveForm = new FormGroup({ 
        // 'this.myReactiveForm':new FormControl(null,Validators.required),
        'userId':new FormControl(null),
        'title':new FormControl(null),
        'completed':new FormControl(null),
        // 'phone':new FormControl(null, Validators.compose([
        //  ,
        //   Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        // ])),
        // 'address':new FormControl(''),
        // 'country':new FormControl('India'),
      });
    }
    onSubmit(){
    this.getName.emit("hello")
    
    this.show ='red'
    if(localStorage.getItem('Users') ){
      this.user = JSON.parse(localStorage.getItem("Users")||'{}') ;
    
      // thg
    // localStorage.setItem("Users",JSON.stringify(this.user))  

    }
    this.user.push(this.myReactiveForm.value);
    localStorage.setItem("Users",JSON.stringify(this.user));
    this.userservice.inserRecord(this.myReactiveForm.value).subscribe(result => {
      console.log(result);
    })
    }

  
}



