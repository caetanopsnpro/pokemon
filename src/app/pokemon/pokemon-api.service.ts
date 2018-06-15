import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PokemonApiService {

  urlBase = "api/v2/pokemon/";
  constructor(private http: HttpClient) { }

  getPokemons(next, quantidade){
    if(!quantidade) quantidade = 100;
    if(next){
      return this.http.get(next);
    }else{
      return this.http.get(`${this.urlBase}?limit=${quantidade}`);
    }
  }

  getPokemonDetail(url){
    return this.http.get(url);
  }
}
