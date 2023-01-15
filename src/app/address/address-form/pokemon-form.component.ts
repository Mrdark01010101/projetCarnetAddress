import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

import { Router } from '@angular/router';
import { FirebseService } from '../../firebse.service';
import { Address } from '../../address';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class  AddressFormComponent implements OnInit {

  @Input() address: Address;
  isAddForm: boolean;

  pokemonType: string[];
  public file:File;
  

  constructor(
  
    private route: Router,
    private _firebase : FirebseService,private router: Router
    ) {

  }

  ngOnInit(): void {
    this.address.email="";
    this.address.last_name="";

    this.address.telephon="";
   
  
   this.isAddForm = this.route.url.includes('add');
  }

 



  onSubmit() {
    if(this.isAddForm){
      console.log(this.address);
      this._firebase.saveMessage(this.file,this.address).then(()=>{
        this.router.navigate(['address']);

      });
      

      
      
    }else{
     
    }
   
  }

  choisImage(event:any){
    this.file=event.target.files[0];
    console.log(this.file)
  
    
  }

 
}



