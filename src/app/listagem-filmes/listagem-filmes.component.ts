import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

interface Ifilme {
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  poster_path: string;
  title: string;
  video: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  release_date: Date;
  overview: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
}

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  public filmes:Array<Ifilme>;
  poster:string

  constructor(private filmesS: FilmesService) { 
    this.filmes = [];
    this.poster='';
  }
  
  ngOnInit():void {
    this.filmesS.populares().subscribe((lista: Ifilme[]) => {
      for(let i=0; i<lista.length; i++){
        this.poster = lista[i].poster_path;
        lista[i].poster_path = ''.concat('https://image.tmdb.org/t/p/w500',this.poster);
        this.filmes.push(lista[i]);
      }
    })
  }
}
