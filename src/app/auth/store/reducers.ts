import {Action, createReducer, on} from '@ngrx/store';

import {AuthStateInterface} from '../types/authState.interface';
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface';
import {LoginAction, LoginFailureAction, LoginSuccessAction} from './actions/login.action';



const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLogged: false,
  validationErrors: null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction, (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction, (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLogged: true,
      currentUser: action.currentUser
    }),
    ),
    on(
      registerFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
      })
    ),
  on(
    LoginAction,
    (state): AuthStateInterface =>({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    LoginSuccessAction,
    (state, action): AuthStateInterface =>({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLogged:true
    })
  ),
  on(
    LoginFailureAction,
    (state, action): AuthStateInterface =>({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors

    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

