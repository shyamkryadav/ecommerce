import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService, private router:Router){}
  showLogin:boolean=false;
  authError:string='';
  ngOnInit(): void {
    this.seller.reloadSeller()
    
  }
  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
  }

  LoginUp(data:login):void{
    this.authError=''
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError: any)=>{
      if(isError){
        this.authError="Email of passwor is not correct"
      }
    })
  }

  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }


}
