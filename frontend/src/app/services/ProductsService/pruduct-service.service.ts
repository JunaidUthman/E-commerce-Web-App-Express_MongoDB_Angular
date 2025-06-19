import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruductServiceService {
  private backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTopProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/top-products`);
  }
  getProductWithDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/product-with-details/${id}`);
  }
}