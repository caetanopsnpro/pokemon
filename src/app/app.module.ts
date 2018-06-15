import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './pokemon/list/list.component';
import { DetailPokemonComponent } from './pokemon/detail/detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatExpansionModule} from '@angular/material/expansion';

const appRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/detail/:url', component: DetailPokemonComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatListModule,
    NgxSpinnerModule,
    MatExpansionModule

  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
