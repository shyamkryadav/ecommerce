import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: undefined | product[];
  productMessage: undefined | string;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
   this.List()
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((res) => {
      if (res) {
        this.productMessage = 'Product is deleted';
        this.List()
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  List(){
    this.product.productList().subscribe((res) => {
      if (res) {
        this.productList = res;
      }
    });
  }
}
