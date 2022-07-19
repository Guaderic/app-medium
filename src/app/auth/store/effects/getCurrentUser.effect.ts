
import {Injectable} from '@angular/core';
import {Actions, createEffect,  ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {
  GetCurrentUserAction,
  GetCurrentUserFailureAction,
  GetCurrentUserSuccessAction
} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect{
  GetCurrentUser$ = createEffect(()=>
    this.actions$.pipe(
      ofType(GetCurrentUserAction),
      switchMap(()=>{
        const token = this.persistenceService.get('accessToken')
        if(!token){
          return of(GetCurrentUserFailureAction)
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser:CurrentUserInterface)=>{
            return GetCurrentUserSuccessAction({currentUser})
          }),
          catchError(()=>{
            return of(GetCurrentUserFailureAction())
          })
        )
      })
    )
  )


  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService:PersistenceService,
              ) {
  }
}
