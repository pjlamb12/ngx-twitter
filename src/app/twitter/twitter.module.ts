import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TweetComponent } from './tweet/tweet.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TwttrService } from './twttr.service';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	declarations: [TweetComponent, TimelineComponent],
	exports: [TweetComponent, TimelineComponent],
	providers: [TwttrService],
})
export class TwitterModule {
	constructor(private _twttr: TwttrService) {
		this._twttr.loadScript();
	}
}
