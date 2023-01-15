import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , catchError, of, tap} from 'rxjs';
import { Address } from '../address';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient){}

// methode pour retourner la liste des pokemon

getPokemonList():Observable<Address[]>{
  return this.http.get<Address[]>('api/pokemons').pipe(
    tap((pokemonList)=>console.log(pokemonList)),
    catchError((error)=>{
        console.log(error);
        return of ([]);
      }
    )
  )
  
}

getPokemonById(pokemonid:string):Observable< Address |undefined>{
  return this.http.get<Address>(`api/pokemons/${pokemonid}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handelError(error,undefined))
  )
}

updatePokemon(pokemon:Address):Observable<null>{
  const httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'applocations/json'})
  };
  return this.http.put('api/pokemons', pokemon, httpOptions).pipe(

    tap((pokemonUpdate)=>this.log(pokemonUpdate)),
    catchError((error)=>this.handelError(error,null))
  );
  
}

deletePokemonById(pokemonId: number): Observable<null>{
  return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
    tap((pokemonDelete) => this.log(pokemonDelete)),
    catchError((error) => this.handelError(error, null))
  );
}

addPokemon(pokemon:Address):Observable<Address>{
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})

  };
  return this.http.post<Address>('api/pokemons',pokemon,httpOptions).pipe(
    tap((pokemonAdd)=> console.log(pokemonAdd)),
    catchError((error)=>this.handelError(error,null))
  )
}

private log(respose:any){
  console.table(respose);

}

private handelError(error:Error,errorValue:any){
  console.error(error);
  return of(errorValue);
}



getPokemonTypeList():string[]{
  return [
    'Proffessionnel','Mobile','Home','Client'];
}




}
