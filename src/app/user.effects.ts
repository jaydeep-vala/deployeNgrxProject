import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { UserDataService } from './user-data.service';
import {mergeMap, map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserEffects {



  constructor(private actions$: Actions,private userService:UserDataService) {}

  @Effect()
  loadUsers$ :Observable<Action> =this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userService.ApiDemo().pipe(
        map(users => (new userActions.LoadUsersSuccess({data: users}))),
        catchError(err => of(new userActions.LoadUsersFailure({error:err})))
      )
    )
  )
}
