export interface WordSearchRequest {
  words: string[];
  matrix: string[][];
}

export interface WordSearchResponse {
  encontrado: string[];
  noEncontrado: string[];
}
