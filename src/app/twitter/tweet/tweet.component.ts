import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EmbeddedTweetOptions } from '../classes/embedded-tweet-options';
declare const twttr: any;

@Component({
	selector: 'ngx-tweet',
	templateUrl: './tweet.component.html',
	styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements AfterViewInit {
	@Input() tweetId: string;
	@Input() options: EmbeddedTweetOptions = new EmbeddedTweetOptions();
	@ViewChild('tweet') tweet: ElementRef;
	public embeddedTweet: any;

	constructor() {}

	ngAfterViewInit() {
		window['twttr'].ready(twttr => {
			twttr.widgets.createTweet(this.tweetId, this.tweet.nativeElement, this.options.formatForOptions());
		});
	}
}
