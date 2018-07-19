import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '@server/users/interfaces/user.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('/api/user', httpOptions);
  }
}
