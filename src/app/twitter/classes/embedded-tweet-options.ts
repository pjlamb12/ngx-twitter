export class EmbeddedTweetOptions {
	public cards: string;
	public conversation: string;
	public theme: string;
	public linkColor: string;
	public align: string;
	public lang: string;
	public width: number;
	public dnt: boolean;

	constructor(obj: any = {}) {
		this.cards = obj.cards ? obj.cards : 'hidden';
		this.conversation = obj.conversation ? obj.conversation : 'none';
		this.theme = obj.theme ? obj.theme : 'light';
		this.linkColor = obj.linkColor ? obj.linkColor : '#55acee';
		this.align = obj.align ? obj.align : 'center';
		this.lang = obj.lang ? obj.lang : 'en';
		this.width = obj.width ? obj.width : 325;
		this.dnt = obj.dnt ? obj.dnt : true;
	}

	themeValid(theme: string) {
		return theme !== 'light' && theme !== 'dark';
	}

	alignValid(align: string) {
		return align !== 'left' && align !== 'center' && align !== 'right';
	}

	widthValid(width: number) {
		return width >= 250 && width <= 550;
	}

	formatForOptions() {
		return {
			cards: this.cards !== 'hidden' ? '' : this.cards,
			conversation: this.conversation !== 'none' ? '' : this.conversation,
			theme: this.themeValid(this.theme) ? this.theme : 'light',
			'link-color': this.linkColor,
			align: this.alignValid(this.align) ? this.align : 'center',
			lang: this.lang,
			width: this.widthValid(this.width) ? this.width : 325,
			dnt: this.dnt,
		};
	}
}
