import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProdcutMesage:string|undefined;

  constructor(private product:ProductService){}

  addProducts(data:product){
    this.product.addProduct(data).subscribe((res)=>{
      if(res){
        this.addProdcutMesage="Product is sucessfully added"
      }
      setTimeout(() => {
        this.addProdcutMesage=undefined;
      }, 3000);
    })
  }
}
