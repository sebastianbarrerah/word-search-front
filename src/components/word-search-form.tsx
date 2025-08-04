import { useState } from 'react';
import type { WordSearchResponse } from '../types/word-search.interface';
import { searchWords } from '../api/word-search';

export default function WordSearchForm() {
  const [matrixInput, setMatrixInput] = useState('');
  const [wordsInput, setWordsInput] = useState('');
  const [result, setResult] = useState<WordSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const matrix = matrixInput
      .trim()
      .split('\n')
      .map((row) => row.split(',').map((c) => c.trim().toUpperCase()));

    const words = wordsInput
      .trim()
      .split(/[\n,]+/)
      .map((palabra) => palabra.trim().toUpperCase())
      .filter(Boolean);

    try {
      setLoading(true);
      const response = await searchWords({ matrix, words });
      setResult(response);
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al buscar palabras.');
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div>
      <h2>Sopa de Letras</h2>

      <label>Matriz (14x14, separada por comas):</label>
      <textarea
        rows={14}
        cols={50}
        value={matrixInput}
        onChange={(e) => setMatrixInput(e.target.value)}
        placeholder="N,D,E,K,I,C,A,N,G,U,R,O,G,E..."
      />

      <label>Palabras a buscar:</label>
      <textarea
        rows={5}
        cols={50}
        value={wordsInput}
        onChange={(e) => setWordsInput(e.target.value)}
        placeholder="GATO, PERRO, JAGUAR..."
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar palabras'}
      </button>

      {result && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Resultados:</h3>
          <div>
            <strong>✅ Encontradas:</strong>
            <ul>
              {result.found.map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong> No encontradas:</strong>
            <ul>
              {result.notFound.map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
