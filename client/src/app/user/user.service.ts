import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('/api/user', httpOptions);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/api/user/${id}`, httpOptions);
  }

  deleteUser(id: string): Observable<Array<User>> {
    return this.http.delete<Array<User>>(`/api/user/${id}`, httpOptions);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`/api/user`, user, httpOptions);
  }
}
