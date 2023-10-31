import { Component } from '@angular/core';
import { SignUp, login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin:boolean=true;
  authError:string="";
  constructor(private user:UserService){}

  ngOnInit(): void {
   this.user.userAuthReload()
  }

  singUp(data:SignUp){
    this.user.userSignup(data)
  }

  login(data:login){
      this.user.userLogin(data)
      this.user.invalidUserAuth.subscribe((res)=>{
        // console.log("apple",res)
        if(res){
          this.authError="Please Enter Valid user Details"
        }
      })
  }

  openSignUP(){
    this.showLogin=false;
  }

  openLogin(){
    this.showLogin=true;

  }
 
}
