import { Action } from '@ngrx/store';
import { IUser } from './user';
import { UserActions, UserActionTypes } from './user.actions';
// import { } from './user'

export const userFeatureKey = 'usersState';

export interface State {
 users:IUser[],
 error:string,
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  users: [],
  error:'',
  loading: false,
  loaded : false
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return{
        ...state,
        loading: true
      }
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users : action.payload.data,
        error : '',
        loaded: true,
          loading: false,
      }
      case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users : [],
        error : action.payload.error,
        loading: false
      }
    default:
      return state;
  }
}
