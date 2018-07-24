import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from '@client/app.component';
import { UserModule } from '@client/user/user.module';
import { states } from '@client/app.state';
import { routes } from '@client/app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes),
    NgxsModule.forRoot(states),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgbModule.forRoot(),

    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
