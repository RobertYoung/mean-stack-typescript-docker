import { Component } from '@angular/core';
import { AppModel } from '@client/app.model';
import { User } from '@server/users/interfaces/user.interface';

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
