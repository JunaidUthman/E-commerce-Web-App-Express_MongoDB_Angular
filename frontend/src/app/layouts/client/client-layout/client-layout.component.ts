import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductsComponent, FooterComponent],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css'
})
export class ClientLayoutComponent {

}
