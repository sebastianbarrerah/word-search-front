import type { WordSearchRequest, WordSearchResponse } from "../types/word-search.interface";

export async function searchWords(payload: WordSearchRequest): Promise<WordSearchResponse> {
  const response = await fetch('http://localhost:3000/wordsearch/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Error al buscar palabras');
  }

  return await response.json();
}
