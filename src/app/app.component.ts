import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public arr: string[] = ['850007368138018817', '976335970202038273', '931765309022670849'];

	addToArr() {
		this.arr.push(1);
	}
}
