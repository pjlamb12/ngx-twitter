import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TwitterModule } from './twitter/twitter.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	declarations: [AppComponent, NavigationComponent],
	imports: [BrowserModule, TwitterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
