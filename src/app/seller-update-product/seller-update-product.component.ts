import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData:undefined | product;

constructor (private route:ActivatedRoute , private product:ProductService){}

ngOnInit(): void {
  let ptoductId=this.route.snapshot.paramMap.get('id');
  console.log(ptoductId)
  ptoductId && this.product.getProduct(ptoductId).subscribe((res)=>{
      this.productData=res
  })
}
  updateProducts(data:any){

  }
}
