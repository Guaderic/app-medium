import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingComponent } from './components/isLoading/isLoading.component';



@NgModule({
  declarations: [
    IsLoadingComponent
  ],
  exports: [
    IsLoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IsLoadingModule { }
