import {Injectable} from '@angular/core';
import {Actions, createEffect,  ofType} from '@ngrx/effects';
import {catchError, map, Observable, of, switchMap, tap} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from '../../../shared/services/persistence.service';
import {Router} from '@angular/router';
import {LoginAction, LoginFailureAction, LoginSuccessAction} from '../actions/login.action';

@Injectable()
export class LoginEffect{
  login$ = createEffect(()=>
    this.actions$.pipe(
      ofType(LoginAction),
      switchMap(({request})=>{
        return this.authService.login(request).pipe(
          map((currentUser:CurrentUserInterface)=>{
            this.persistenceService.set('accessToken', currentUser.token)
            return LoginSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse)=>{
            return of(LoginFailureAction({errors: errorResponse.error.errors}))
          })
        )
      })
    )
  )
  redirectAfterSubmit = createEffect(()=>this.actions$.pipe(
      ofType(LoginSuccessAction),
      tap(()=>{
        this.router.navigateByUrl('/')
      })
    ),{dispatch:false}
  )


  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService:PersistenceService,
              private router:Router) {
  }
}
