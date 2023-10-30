import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts:undefined| product[];
  constructor(private product:ProductService){}

  ngOnInit(): void {
   this.product.popularProducts().subscribe((res)=>{
    this.popularProducts=res
   })
  }
}
