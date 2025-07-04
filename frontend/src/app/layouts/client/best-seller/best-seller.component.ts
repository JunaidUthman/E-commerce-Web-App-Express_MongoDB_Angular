import { Component } from '@angular/core';
import { PruductServiceService } from '../../../services/ProductsService/pruduct-service.service';
import { CommonModule } from '@angular/common';
import { AddToCardComponent } from '../add-to-card/add-to-card.component';
import { AuthServiceService } from '../../../services/authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-seller',
  imports: [CommonModule , AddToCardComponent ],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
  productId : string = '';
  topProducts: any[] = [];
  showAddToCardPopup = false;

  showSuccessAlert = false;
  successMessage = '';

  constructor(private productService: PruductServiceService , private AuthServiceService : AuthServiceService , private router : Router) {}

  ngOnInit() {
    this.productService.getTopProducts().subscribe({
      next: (products) => {
        this.topProducts = products;
      },
      error: (err) => {
        console.error('Failed to fetch top products:', err);
      }
    });
  }

  // best-seller.component.ts
selectedProduct: any = null;

addToCard(productId: string) {
  if(this.isLoggedIn() != true){
    alert("You must be logged in to add products to your cart.");
    this.router.navigate(['/Login']);
    return ;
  }
  this.productService.getProductWithDetails(productId).subscribe({
    next: (product) => {
      this.selectedProduct = product;
      this.showAddToCardPopup = true;
    },
    error: (err) => {
      console.error('Failed to fetch product details:', err);
    }
  });
}
isLoggedIn() : boolean{
  return this.AuthServiceService.isLoggedIn();
}

closeAddToCardPopup() {
  this.showAddToCardPopup = false;
  this.selectedProduct = null;
}
closeAlertPopup(){
  this.showSuccessAlert = false;
}

OpenAlertPopup(){
  this.showSuccessAlert = true;
}
  
}
