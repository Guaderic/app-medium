import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';

export const GetCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER,
)

export const GetCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const GetCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
)
