import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './layouts/client/header/header.component';
import { ProductsComponent } from './layouts/client/products/products.component';
import { FooterComponent } from './layouts/client/footer/footer.component';
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
