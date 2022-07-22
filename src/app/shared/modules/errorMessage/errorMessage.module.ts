import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/errorMessage/errorMessage.component';



@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  exports: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorMessageModule { }
