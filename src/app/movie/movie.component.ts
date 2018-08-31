import {Component, Input, OnInit} from '@angular/core';
import {TMDbService} from "../tmdb.service";
import {Movie} from "../app.dataTypes/Movie";
import {ResultList} from "../app.dataTypes/ResultList";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})


export class MovieComponent implements OnInit {
  data: Movie;
  @Input() movieid: number;

  //
  constructor(private tmdb: TMDbService, private route: ActivatedRoute) {
    console.log("New movie compo");
  }

  ngOnInit() {
    if (this.movieid) {
      this.tmdb.getMovie(this.movieid).subscribe(data => this.data = data);
    }
    this.route.queryParams.subscribe( params => {
      const movieId = +params.movieId;
      if (movieId) {
        this.tmdb.getMovie(movieId).subscribe(data => this.data = data);
      }
    });
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
