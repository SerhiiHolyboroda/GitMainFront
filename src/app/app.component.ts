import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Acode';
 // products: Product[] = [];


  constructor(
  // private http: HttpClient
    ) {}

  ngOnInit(): void {
  //   this.http.get<Pagination<Product[]>>('https://localhost:7272/api/Products?Search=product').subscribe({
  //     next: response => this.products = response.data1, // Update products with data from data1
  //     error: error => console.log(error),
  //     complete: () => {
  //       console.log(this.products);
  //       console.log("Request completed");
  //     }
  //   });
   }
}
