import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private backendAdress = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  // Add this method to your service
    addToCard(produitId: string, selectedColor: string, selectedSize: string, quantity: number): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.post(
        'http://localhost:3000/add-to-card',
        { produitId, selectedColor, selectedSize, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }
}
