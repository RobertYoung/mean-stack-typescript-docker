import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppState } from '@client/app.state';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([AppState]), NgxsReduxDevtoolsPluginModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
