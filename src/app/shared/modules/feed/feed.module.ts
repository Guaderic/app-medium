import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/Feed/feed.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
  path:'', component: FeedComponent
  }
]

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedModule { }
