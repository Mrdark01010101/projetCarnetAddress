import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string='';
  password:string='';
  constructor(private  authService:AuthService){}
ngOnInit(): void {
   
}
  register(){
    if(this.email=='' ){
      alert('please enter emmail');
    }
    if(this.password==''){
      alert('please enter password');
  
    }
    if(this.password && this.email){
      this.authService.register (this.email,this.password);
      this.email='';
      this.password='';
    }
  }



}
