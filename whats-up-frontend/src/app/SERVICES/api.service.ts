import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getChats(): Observable<any>{
    return this.http.get(this.serverUrl + '/chats')
  }

}
