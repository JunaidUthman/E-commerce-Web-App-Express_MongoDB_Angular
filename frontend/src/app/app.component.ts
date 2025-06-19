import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';

import { CrudService } from './services/CrudService/crud.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , ProductsComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private crudService: CrudService) {}

  title = 'frontend';


  
}
