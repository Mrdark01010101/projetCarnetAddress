import { Component, OnInit } from '@angular/core';
import { Address } from '../../address';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent  implements OnInit{

    address: Address;

    ngOnInit(){
      this.address = new Address();
    }
}
