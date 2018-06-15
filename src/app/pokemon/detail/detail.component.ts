import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PokemonApiService } from './../pokemon-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon: object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonApiService: PokemonApiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.activatedRoute.params.subscribe((params: Params) =>{
      let urlDetail = params['url'];
      this.getPokemonDetail(urlDetail);
    }, (error: any) => {
      this.spinner.hide();
      //TODO: Redirect to error window or show popup!
    });  
  }

  private getPokemonDetail(urlDetail){
      // Nesse caso o objeto é muito maior. Por se tratar de uma prova avaliativa e já ter utilizado
      // modelo de contrato para a listagem dos pokemons, optei por deixar o detalhamento dinamico.
      this.pokemonApiService
        .getPokemonDetail(urlDetail)
        .subscribe((pokemon: object) => { // cast de objeto dinamico do retorno.
          this.pokemon = pokemon;
          this.spinner.hide();
        }, (error: any) => {
          this.spinner.hide();
          //TODO: Redirect to error window or show popup!
        });
  }
}
