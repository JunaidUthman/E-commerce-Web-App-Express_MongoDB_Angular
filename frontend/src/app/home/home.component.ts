import { Component , AfterViewInit} from '@angular/core';
import { RoolesComponent } from '../rooles/rooles.component';
import { BestSellerComponent } from '../best-seller/best-seller.component';


@Component({
  selector: 'app-home',
  imports: [RoolesComponent , BestSellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
