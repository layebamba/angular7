import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UrlUsers="http://127.0.0.1:8000/user";

  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.UrlUsers)

  }
}
