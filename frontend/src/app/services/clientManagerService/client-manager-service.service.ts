import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientManagerServiceService {

 private backendAdress = "http://localhost:3000";

  constructor(private http : HttpClient) { }


  testObs() : Observable<any>{
    return this.http.get(`${this.backendAdress}/test`)
  }

  createUser(email : string , password : string ) : Observable<any>{
    return this.http.post(`${this.backendAdress}/creatClient`, { email, password });
  }

  LogUser(email : string , password : string ) : Observable<any>{
    return this.http.post(`${this.backendAdress}/logClient`, { email, password });
  }
}
