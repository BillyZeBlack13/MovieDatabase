import { Component } from '@angular/core';
import {TMDbService} from './tmdb.service';
import {SearchMovieResult} from "./app.dataTypes/SearchMovie";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema';
  currentSearchRes: SearchMovieResult;
  //
  constructor(private tmdb: TMDbService) {
    tmdb.init('25ea93320b0ede2eb2ce7b2661886a0e');
  }
//
  search(txt: string) {
    this.tmdb.search( {query: txt} ).subscribe(res => this.currentSearchRes = res);
  }
}//fin de classe
