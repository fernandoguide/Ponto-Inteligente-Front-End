import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models';
import { environment as env } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }


  logar(login: Login): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, login);
   }
}
