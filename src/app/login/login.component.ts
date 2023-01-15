import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string='';
password:string='';

constructor(private  authService:AuthService){}

ngOnInit(): void {
  
}


login(){
  if(this.email=='' ){
    alert('please enter emmail');
  }
  if(this.password==''){
    alert('please enter password');

  }
  if(this.password && this.email){
    this.authService.login(this.email,this.password);
    this.email='';
    this.password='';
  }
  
}
}
