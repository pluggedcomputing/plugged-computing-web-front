import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmailInputService {

  private readonly API = 'api/user';

  constructor(private httpClient: HttpClient) { }
  
  saveUser(user: User) {
    return this.httpClient.post<User>(this.API, user);
  }
}
