import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngx-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
	@Input() tweetIds: string[];
	constructor() {}

	ngOnInit() {}
}
