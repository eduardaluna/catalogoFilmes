import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { FilmesService } from './filmes.service';
import { FilmeComponent } from './filme/filme.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DetalhamentoFilmesComponent } from './detalhamento-filmes/detalhamento-filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmesComponent,
    FilmeComponent,
    DetalhamentoFilmesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    FilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
