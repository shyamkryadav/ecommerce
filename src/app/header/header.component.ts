import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { concatAll } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string='default'
  sellerName='';
  searchResult:undefined| product[];
  constructor(private rout:Router,private product:ProductService){}

  ngOnInit(): void {
    this.rout.events.subscribe((res:any)=>{
      // console.log(res.url)
      if(res.url){
        if(localStorage.getItem('seller') && res.url.includes('seller')){
         this.menuType="seller"
         if(localStorage.getItem('seller')){
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)
          this.sellerName=sellerData.name;
         }
        }else{
          this.menuType="default"
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.rout.navigate(['/'])
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const elemet=query.target as HTMLInputElement;
      this.product.searchProducts(elemet.value).subscribe((res)=>{
        if(res.length >5){
          res.length=5;
        }
        this.searchResult=res
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  SubmitSearch(val:string){
   this.rout.navigate([`search/${val}`])
  }
}
