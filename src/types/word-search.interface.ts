export interface WordSearchRequest {
  words: string[];
  matrix: string[][];
}

export interface WordSearchResponse {
  found: string[];
  notFound: string[];
}
