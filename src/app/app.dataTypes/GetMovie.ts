import {ResultList} from './ResultList';

interface GetMovies {
  id?: number;
  page?: number;
  results?: ResultList[];
  total_pages?: number;
  total_results?: number;
}
