import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PokemonApiService {

  url = "api/v2/pokemon/";
  constructor(private http: HttpClient) { }

  getPokemons(next, quantidade){
    if(!quantidade) quantidade = 100;
    if(next){
      return this.http.get(next);
    }else{
      return this.http.get(`${environment.baseUrl}${this.url}?limit=${quantidade}`);
    }
  }

  getPokemonDetail(url){
    return this.http.get(url);
  }
}
