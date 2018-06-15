import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from './../pokemon-api.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
import { PokeApiModel, PokeApiItemModel } from './../../../model/pokemon/list.pokeapi';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListPokemonComponent implements OnInit {

  pokemons = new BehaviorSubject(Array<PokeApiItemModel>());
  pokemonsRetrieved = new PokeApiModel();
  totalItensPorPagina = 100;
  keepPaging = true;
  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() { 
    this.getPokemons();
  }

  private getPokemons(){
    let currentPokemons = this.pokemons.getValue();
    if(this.keepPaging){
      this.pokemonApiService
      .getPokemons(this.pokemonsRetrieved.next, this.totalItensPorPagina)
      .subscribe((pokemons: PokeApiModel) => {
        if(this.totalItensPorPagina !== pokemons.results.length){
          this.keepPaging = false;
        }
        this.pokemonsRetrieved = pokemons;
        this.pokemons.next(_.concat(currentPokemons, pokemons.results))
      })
    }
  }

  onScroll(){
    this.getPokemons();
  }
}
