import { Component } from '@angular/core';
import { PruductServiceService } from '../services/ProductsService/pruduct-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-seller',
  imports: [CommonModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
  topProducts: any[] = [];

  constructor(private productService: PruductServiceService) {}

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
}
