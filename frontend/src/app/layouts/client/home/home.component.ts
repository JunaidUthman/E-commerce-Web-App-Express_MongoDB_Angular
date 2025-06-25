import { Component , OnInit} from '@angular/core';
import { BestSellerComponent } from '../best-seller/best-seller.component';
import { NewProductsComponent } from '../new-products/new-products.component';



@Component({
  selector: 'app-home',
  imports: [ BestSellerComponent , NewProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
}
