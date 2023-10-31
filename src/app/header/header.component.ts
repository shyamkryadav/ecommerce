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
  sellerName:string='';
  userName:string='';
  searchResult:undefined| product[];
  constructor(private rout:Router,private product:ProductService){}

  ngOnInit(): void {
    this.rout.events.subscribe((res:any)=>{
      if(res.url){
        if(localStorage.getItem('seller') && res.url.includes('seller')){
         if(localStorage.getItem('seller')){
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;
         this.menuType="seller"
         }
        }else if(localStorage.getItem('user')){
          let userStore=localStorage.getItem('user');
          let userData=userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType="user"

        } else{
          this.menuType="default"
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.rout.navigate(['/'])
  }
  userLogout(){
    localStorage.removeItem('user');
    this.rout.navigate(['/user-auth'])
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

  redirectToDetails(id:number){
    this.rout.navigate(['/details/'+id])

  }
}
