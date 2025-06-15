import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private crud:CrudService){

  }

  // getProducts(){
  //   this.crud.getAll().subscribe((data) => {
  //     console.log(data.title);
  //   })
  // }
}
