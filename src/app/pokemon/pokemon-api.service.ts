import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get('http://5b22ce7eb968350014dd003a.mockapi.io/xp/pokemon/list');
  }
}
