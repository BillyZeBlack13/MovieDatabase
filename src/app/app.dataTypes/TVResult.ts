import {OriginCountry} from './OriginCountry';

export interface TvResult {
  poster_path?: string;
  popularity?: number;
  id?: number;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
  genreId?: number[];
  origin_country?: OriginCountry;
}
