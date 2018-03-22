# ngx-twitter

`ngx-twitter` is an Angular component library that takes a Twitter tweet ID and uses the Twitter embedded script to embed the tweet in your page. For now, the components are:

*   `tweet`, which embeds a single tweet in the page
*   `tweet-list`, which takes a list of IDs and loops over it and embeds each as a `tweet` component

When the module loads, it loads the `https://platform.twitter.com/widgets.js` script, and then when it's ready the tweets will be embedded in the page.

When using either `tweet` or `tweet-list`, there is an optional `options` object that can be passed in. The options class has the following attributes:

```
public cards: string; 		// defaults to 'hidden'
public conversation: string; 	// defaults to 'none'
public theme: string; 		// defaults to 'light'
public linkColor: string; 	// defaults to '#55acee'
public align: string; 		// defaults to 'center'
public lang: string; 		// defaults to 'en'
public width: number; 		// defaults to 325
public dnt: boolean; 		// defaults to true
```

When the options are passed in to the script to embed the tweet, it looks at each attribute, and if an invalid option value is passed in, it defaults to the above values.

In future releases, Embedded Timelines, Moments, Direct Messages, and others will be implemented as well. If you'd like to contribute, submit an issue or a PR with the desired additions.
