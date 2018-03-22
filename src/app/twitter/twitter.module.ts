import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TweetComponent } from './tweet/tweet.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TwttrService } from './twttr.service';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [TweetComponent, TweetListComponent],
	exports: [TweetComponent, TweetListComponent],
	providers: [TwttrService],
})
export class TwitterModule {
	constructor(private _twttr: TwttrService) {
		this._twttr.loadScript();
	}
}
