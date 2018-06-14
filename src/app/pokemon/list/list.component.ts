import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from './../pokemon-api.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListPokemonComponent implements OnInit {

  pokemons = new BehaviorSubject([]);
  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() { 
    this.getPokemons();
  }

  private getPokemons(){
    let currentPokemons = this.pokemons.getValue();
    this.pokemonApiService
      .getPokemons()
      .subscribe(result => {
        this.pokemons.next(_.concat(currentPokemons, result))
      })
  }

  onScroll(){
    this.getPokemons();
  }
}
