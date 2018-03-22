import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngx-tweet-list',
	templateUrl: './tweet-list.component.html',
	styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent implements OnInit {
	@Input() tweetIds: string[];
	constructor() {}

	ngOnInit() {}
}
