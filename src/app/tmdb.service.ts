
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchMovieResult, SearchMovieQuery} from './app.dataTypes/SearchMovie';
import {Observable} from 'rxjs';

function toObjectString(obj: Object): {[key: string]: string} {
  const objString = {};
  for (const i in obj) {
    const v = obj[i];
    objString[i] = typeof v === 'string' ? v : JSON.stringify(v);
  }
  return objString;
}

@Injectable({
  providedIn: 'root'
})
export class TMDbService {

  private api_key: string;
  private TMDb_url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  init(api_key: string) {
    this.api_key = api_key;
  }

  search(req: SearchMovieQuery): Observable<SearchMovieResult> {
    const searchURL = `${this.TMDb_url}/search/movie`;
    req.api_key = req.api_key || this.api_key;
    return this.http.get(searchURL, {params: toObjectString(req), responseType: 'json'});
  }
}

