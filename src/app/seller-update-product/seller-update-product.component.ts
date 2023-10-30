import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData:undefined | product;
  productMessage:undefined | string;

constructor (private route:ActivatedRoute , private product:ProductService,_router:Router){}

ngOnInit(): void {
  let ptoductId=this.route.snapshot.paramMap.get('id');
  console.log(ptoductId)
  ptoductId && this.product.getProduct(ptoductId).subscribe((res)=>{
      this.productData=res
  })
}
  updateProducts(data:product){
    if(this.productData){
      data.id=this.productData.id
    }
   this.product.updateProduct(data).subscribe((res)=>{
    if(res){
      this.productMessage="Product Has Updated"
    }
   })
  setTimeout(() => {
    this.productMessage=undefined;
  }, 3000);

  }
}
