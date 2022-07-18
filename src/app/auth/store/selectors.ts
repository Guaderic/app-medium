import { createSelector} from '@ngrx/store';
import {AppStateInterface} from "../../shared/types/appState.interface";
import {AuthStateInterface} from '../types/authState.interface';


export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;


export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLogged
)
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLogged === false
)
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)


