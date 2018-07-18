import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from '@client/app.component';
import { UserModule } from '@client/user/user.module';
import { states } from '@client/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot(states), NgxsReduxDevtoolsPluginModule.forRoot(), UserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
