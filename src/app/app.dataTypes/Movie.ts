export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: Object;
  budget?: number;
  genres?: MovieGenre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: Country[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Language[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
