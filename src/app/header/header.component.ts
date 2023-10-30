import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string='default'
  sellerName='';
  constructor(private rout:Router){}

  ngOnInit(): void {
    this.rout.events.subscribe((res:any)=>{
      console.log(res.url)
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
}
