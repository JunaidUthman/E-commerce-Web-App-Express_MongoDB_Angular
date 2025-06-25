import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isLoggedIn(): boolean {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
    
}
