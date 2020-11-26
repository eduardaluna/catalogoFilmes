import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

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

interface Ibusca {
  total_pages: number;
  results: Array<Ifilme>;
}

@Injectable({
  providedIn: 'root'
})

export class FilmesService {
  url = 'https://api.themoviedb.org/3/';
  chave = 'dd6516a7d6ebecbe25f34deabfed6e36';

  constructor(private http: HttpClient) { }

  populares(){
    return this.http.get<Ibusca>(''.concat(this.url,'movie/popular?api_key=',this.chave,'&language=pt-BR&page=1')).pipe(map(result=>result.results));
  }

  detalhamento(id : number){
    return this.http.get<Ifilme>(''.concat(this.url,'movie/', id.toString(), '?api_key=', this.chave,'&language=pt-BR'));
  }
}
