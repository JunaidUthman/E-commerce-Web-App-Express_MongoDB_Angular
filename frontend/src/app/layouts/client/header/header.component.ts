import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterModule , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router: any;
  constructor(router : Router){this.router = router;}
  get isLoggedIn(): boolean {
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/Home']);
  }
}
