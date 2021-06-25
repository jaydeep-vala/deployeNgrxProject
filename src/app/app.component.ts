import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import{UserDataService} from "./user-data.service"
// import {UserService} from "./user-data.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  fruite_arr:any=[]
  
  name=''
  age:number;
  constructor(private user:UserDataService) {
    console.log (user.getData())
    let data=user.getData();
    this.name=data.name
    this.age=data.age
    console.log(this.name)
    console.log(this.age)

    this.user.ApiDemo().subscribe(data=>{
      console.log(data)
    });
    
    this.fruite_arr = [
      {
        name: 'harley',
        age: 23,
        email: 'harley123@gmail.com'
      },
      {
        name: "jaydip",
        age: 21,
        email: 'harley123@gmail.com'
      },
      {
        name: 'radha',
        age: 100,
        email: 'harley123@gmail.com'
      },

      {
        name: "krishna",
        age: 93,
        email: 'harley123@gmail.com'

      },
    ]

    this.fruite_arr.sort((a:any, b:any) => {
      return a.age - b.age;
    });
   
  }
  title = 'blog';

  obj1 = {
    'name': "jaydip vala",
    "age": 21,
    "born": "bhavangar"
  }
  yourName = "jaydip vala"
  getName(name: any) {
    console.log(name)
  }
  fbcolor = 'blue';
  currentVal = ""
  myEvent(evt: any) {
    this.currentVal = evt?.target?.value;
    // this.currentVal= evt
    console.log(evt)
    this.fbcolor = 'red'

    // this.currentVal = evt;
  }
  disable = true
  enable_value() {
    this.disable = false
  }
  show = 'yellow';
  fontColor = 'blue';
  sayHelloId = 2;

  message = 'I\'m read only!';
  canEdit = true;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
  color = 'white';
  usersVal ="";
  getUserValue(value:string){
    this.usersVal =value
    console.log(this.usersVal)
    

      this.color = 'green'
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}


