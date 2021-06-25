import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnChanges,DoCheck{
user1 : any;
  constructor( private userSevice:UserDataService) { 
    console.log("constructor....")
  }

  ngOnInit(): void {
    console.log("oninit called..")
    this.userSevice.ApiDemo().subscribe(result => {
      this.user1 = result;
    })
  }

  ngOnChanges(){
    console.log('changes...')
  }
  // user1 = JSON.parse(localStorage.getItem('Users') || '{}');
  ngDoCheck(){
    console.log("do check..")
  }
  ondelete(id:number){
    // let results:any = this.user1.slice(id)
    // localStorage.setItem("Users",JSON.stringify(results));

  }
}
