import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
// import { UserActions } from 'src/app/user.actions';
import * as UserActions from 'src/app/user.actions';
import *  as fromUser from 'src/app/user.selectors';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data:any
  constructor(private store:Store) { }

  ngOnInit(): void {
    // this.store.dispatch(new UserActions.LoadUsers()); //action dispatch

    // this.store.pipe(select(fromUser.getUser)).subscribe(data=>{
    //     this.data=data
    //   });
  }

}
