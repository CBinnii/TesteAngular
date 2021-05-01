import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`https://6089cd648c8043001757f650.mockapi.io/User`);
  }

  register(user: User) {
      return this.http.post(`https://6089cd648c8043001757f650.mockapi.io/User/`, user);
  }

  delete(id) {
      return this.http.delete(`https://6089cd648c8043001757f650.mockapi.io/User/${id}`);
  }
}
