import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private backendAdress = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  // getAll() : Observable<any> {
  //   return this.http.get(`${this.backendAdress}/getProducts`)
  // }

  testObs() : Observable<any>{
    return this.http.get(`${this.backendAdress}/test`)
  }
  
}
 