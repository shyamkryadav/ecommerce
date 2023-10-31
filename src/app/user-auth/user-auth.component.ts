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
  constructor(private user:UserService){}

  ngOnInit(): void {
   this.user.userAuthReload()
  }

  singUp(data:SignUp){
    this.user.userSignup(data)
  }

  login(data:login){
      console.log(data)
  }

  openSignUP(){
    this.showLogin=false;
  }

  openLogin(){
    this.showLogin=true;

  }
 
}
