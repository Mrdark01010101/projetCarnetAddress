import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { FirebseService } from '../../firebse.service';
import { Address } from '../../address';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit{
  pokemon:Address;

  constructor(private firebaseService:FirebseService,private activetedRoute:ActivatedRoute,private router: Router){

  }
  
    async ngOnInit(): Promise<void> {
      
      const pokemonId: string|null = this.activetedRoute.snapshot.paramMap.get('id');
      if(pokemonId){
        this.firebaseService.getArticles().subscribe(async(article)=>{
            
        console.log(this.pokemon)
          const art = article;

          console.log(art)
          art.forEach(a=>{
            if(a.id==pokemonId)
            this.pokemon =a;
            console.log(a)
            console.log(this.pokemon)
          })
        })
  
       
        
      }


      

     
    }
   
  
    setUpdate(address:Address){
     this.firebaseService.updateArticle(address).then(()=>{
      this.router.navigate(['pokemons']);
     })
    }

}
