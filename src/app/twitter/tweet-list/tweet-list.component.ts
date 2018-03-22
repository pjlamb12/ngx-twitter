import { Component, OnInit, Input } from '@angular/core';
import { EmbeddedTweetOptions } from '../classes/embedded-tweet-options';

@Component({
	selector: 'ngx-tweet-list',
	templateUrl: './tweet-list.component.html',
	styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent implements OnInit {
	@Input() tweetIds: string[];
	@Input() options: EmbeddedTweetOptions = new EmbeddedTweetOptions();
	constructor() {}

	ngOnInit() {}
}
