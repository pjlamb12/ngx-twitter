import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TwitterModule } from './twitter/twitter.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, TwitterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
