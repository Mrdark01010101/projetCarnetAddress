import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FirebseService } from '../../firebse.service';
import { Address } from '../../address';



@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {




 name :string|undefined
 

  addressList: Address[]


  constructor(private routeur: Router, private activatedRoute:ActivatedRoute ,private backendFirebaseService: FirebseService) {

  }


  ngOnInit(): void {
    this.name = "search... "
    this.addressList=[];
    this.backendFirebaseService.getArticles().subscribe(async (publications) => {
      this.addressList = publications;
      console.log(this.addressList);
    });

  }

  gotoPokemon(pokemon: Address) {
    this.activatedRoute.snapshot
    this.routeur.navigate(['/pokemon', pokemon.id]);


  }

  searche(){
   let addressSEARCH:Address[] = this.addressList.filter(el => el.last_name ===this.name);
    
    this.addressList = addressSEARCH
  }
}
