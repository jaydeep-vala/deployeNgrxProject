import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import {Store , select} from '@ngrx/store';
import * as UserActions from '../user.actions';
import *  as fromUser from '../user.selectors';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-aip-show',
  templateUrl: './aip-show.component.html',
  styleUrls: ['./aip-show.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AipShowComponent implements OnInit {

  data:any=[]
  constructor(private userservice:UserDataService, private store: Store) {
    // this.userservice.ApiDemo().subscribe(data=>{
    //   this.data=data
    // });
   }
  //  This schematic generates source files that include enhancements to NgRx for data persistence strategies, and simplified testing.
  ngOnInit(): void {
    const loading$ = this.store.select(fromUser.getLoading);
    const loaded$ = this.store.select(fromUser.getLoaded);
    combineLatest([loading$,loaded$]).subscribe(data => {
      if(!data[0] && !data[1]){
        this.store.dispatch(new UserActions.LoadUsers()); //action dispatch
      }
    })

    this.store.pipe(select(fromUser.getUser)).subscribe(data=>{
        this.data=data
      });
  }

}
