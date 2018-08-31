import {ResultList} from "./ResultList";

export interface SearchMovieResult {
  page?: number;
  results?: ResultList[];
  total_results?: number;
  total_pages?: number;
}

export interface SearchMovieQuery {
  api_key?: string;
  query: string;
  page?: number;
}
