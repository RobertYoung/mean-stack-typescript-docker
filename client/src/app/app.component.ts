import { Component } from '@angular/core';
import { AppModel } from '@app/app.model';
import { User } from '@common/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = new User();
  app = new AppModel();
}
