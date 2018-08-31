import {Component, Input, OnInit} from '@angular/core';
import {TMDbService} from "../tmdb.service";
import {Movie} from "../app.dataTypes/Movie";
import {ResultList} from "../app.dataTypes/ResultList";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})


export class MovieComponent implements OnInit {
  data: Movie;
  @Input() movieid: number;

  //
  constructor(private tmdb: TMDbService) {

  }

  ngOnInit() {
    this.tmdb.getMovie(this.movieid).subscribe(data => this.data = data);
  }

  getPosterUrl() {
    return this.data ? "https://image.tmdb.org/t/p/w300/" + this.data.poster_path : "";
  }

  geTitle() {
    return this.data ? this.data.title : "";
  }

  getOverView() {
    return this.data ? this.data.overview : "";
  }
}
