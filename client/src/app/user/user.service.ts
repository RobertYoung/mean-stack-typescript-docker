import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserImmutable } from '@shared/models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<UserImmutable>> {
    return this.http.get<Array<UserImmutable>>('/api/user', httpOptions);
  }

  getUser(id: string): Observable<UserImmutable> {
    return this.http.get<UserImmutable>(`/api/user/${id}`, httpOptions);
  }

  deleteUser(id: string): Observable<Array<UserImmutable>> {
    return this.http.delete<Array<UserImmutable>>(`/api/user/${id}`, httpOptions);
  }

  addUser(user: UserImmutable): Observable<UserImmutable> {
    return this.http.post<UserImmutable>(`/api/user`, user, httpOptions);
  }
}
