export interface Data {
    name: string;
    age: number;
}

export interface Response {
    results: Results;
}

export interface Results {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    genre_ids:         number[];
    original_language: OriginalLanguage;
    original_title?:   string;
    poster_path:       string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    overview:          string;
    id:                number;
    title?:            string;
    release_date?:     Date;
    adult?:            boolean;
    backdrop_path:     string;
    popularity:        number;
    media_type:        MediaType;
    name?:             string;
    original_name?:    string;
    first_air_date?:   Date;
    origin_country?:   string[];
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
}
