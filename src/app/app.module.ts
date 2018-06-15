import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './pokemon/list/list.component';
import { DetailPokemonComponent } from './pokemon/detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { BadrequestComponent } from './error/badrequest/badrequest.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'

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
    ErrorComponent,
    NotfoundComponent,
    BadrequestComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
