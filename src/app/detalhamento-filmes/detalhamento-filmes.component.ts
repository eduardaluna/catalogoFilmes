import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-detalhamento-filmes',
  templateUrl: './detalhamento-filmes.component.html',
  styleUrls: ['./detalhamento-filmes.component.scss']
})
export class DetalhamentoFilmesComponent implements OnInit {
  public id:number;
  public filme : any;
  poster:string

  constructor(private filmesS: FilmesService, private idFilme : ActivatedRoute) { 
    this.id = idFilme.snapshot.params.id;
    this.poster='';
  }
  
  ngOnInit():void {
    this.filmesS.detalhamento(this.id).subscribe((f: Ifilme) => {
      this.poster = f.poster_path;
      f.poster_path = ''.concat('https://image.tmdb.org/t/p/w500',this.poster);
      this.poster = f.backdrop_path;
      f.backdrop_path = ''.concat('https://image.tmdb.org/t/p/w500',this.poster);
      this.filme = f;
    })
  }
}
