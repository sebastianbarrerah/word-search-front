import { useForm } from 'react-hook-form';
import { useState } from 'react';
import type { WordSearchRequest, WordSearchResponse } from '../types/word-search.interface';
import { searchWords } from '../api/word-search';

type FormValues = {
  matrixInput: string;
  wordsInput: string;
};

export default function WordSearchForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [result, setResult] = useState<WordSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const matrix = data.matrixInput
      .trim()
      .split('\n')
      .map((row) => row.split(',').map((c) => c.trim().toUpperCase()));

    const words = data.wordsInput
      .trim()
      .split(/[\n,]+/)
      .map((w) => w.trim().toUpperCase())
      .filter(Boolean);

    const payload: WordSearchRequest = { matrix, words };

    try {
      setLoading(true);
      const response = await searchWords(payload);
      setResult(response);
    } catch (error) {
      console.error(error);
      alert('Error al buscar palabras.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Sopa de Letras</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Matriz (14x14, separada por comas):</label>
        <textarea
          rows={14}
          cols={50}
          placeholder="N,D,E,K,I,C,A,N,G,U,R,O,G,E..."
          {...register('matrixInput', { required: true })}
        />
        {errors.matrixInput && <p style={{ color: 'red' }}>La matriz es obligatoria</p>}

        <label>Palabras a buscar:</label>
        <textarea
          rows={5}
          cols={50}
          placeholder="GATO, PERRO, JAGUAR..."
          {...register('wordsInput', { required: true })}
        />
        {errors.wordsInput && <p style={{ color: 'red' }}>Debes ingresar al menos una palabra</p>}

        <button type="submit" disabled={loading} style={{ marginTop: '1rem' }}>
          {loading ? 'Buscando...' : 'Buscar palabras'}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Resultados:</h3>
          <div>
            <strong>Encontradas:</strong>
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
