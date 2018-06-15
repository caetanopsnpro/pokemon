import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PokemonApiService } from './../pokemon-api.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonApiService: PokemonApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      let urlDetail = params['url'];
      // Nesse caso o objeto é muito maior. Por se tratar de uma prova avaliativa e já ter utilizado
      // modelo de contrato para a listagem dos pokemons, optei por deixar o detalhamento dinamico.
      this.pokemonApiService
        .getPokemonDetail(urlDetail)
        .subscribe((pokemon: object) => { // cast de objeto dinamico do retorno.
          this.pokemon = pokemon;
        });
    })  
  }
}
