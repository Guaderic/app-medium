import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './components/Feed/feed.component';
import {GetFeedEffect} from './store/effects/getFeed.effect';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {FeedService} from './services/feed.service';
import {RouterModule} from '@angular/router';
import {ErrorMessageModule} from '../errorMessage/errorMessage.module';
import {IsLoadingModule} from '../isLoading/isLoading.module';
import {PaginationModule} from '../pagination/pagination.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    IsLoadingModule,
    PaginationModule
  ],
  exports: [
    FeedComponent
  ],
  providers: [FeedService]
})
export class FeedModule {
}
