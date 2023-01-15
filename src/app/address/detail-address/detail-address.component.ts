import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { doc, deleteDoc, setDoc, addDoc } from "firebase/firestore";


import { FirebseService } from 'src/app/firebse.service';
import { Address } from '../../address';


import { Firestore } from '@angular/fire/firestore';
import { async } from '@firebase/util';
import { collection } from '@firebase/firestore';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-address.component.html',

})
export class DetailAddressComponent implements OnInit {
  pokemonlist:any[];
  address:any;
  addressId:string|null
  constructor( private Aroute: ActivatedRoute,private router: Router,private firebaseService:FirebseService,private db:Firestore){

  }

  async ngOnInit(): Promise<void> {
   
    this.addressId = this.Aroute.snapshot.paramMap.get('id');
    if(this.addressId){
      this.firebaseService.getArticles().subscribe((article)=>{
        this.address = article.find((address)=>address.id==this.addressId);
        
      })

     

    }
   
  }

  gotoPokemonList(){
    this.router.navigate(['/addressList']);
  }

  gotoEditPokemon(address:Address){
    this.router.navigate(['edite/address/',address.id]);
  }


  async deletePokemon(id:string){
 let confirme = confirm("are you sure to delete this address");

 if(confirme == true){
  this.firebaseService.deleteAddress(id).then(()=> {
    confirm("this address is delete") 
    this.router.navigate([''])})
 } 

  
  


  }
}
