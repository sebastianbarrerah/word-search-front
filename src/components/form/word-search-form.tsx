import { useForm } from "react-hook-form"
import { useState } from "react"
import "./word-search-form.css"
import type { WordSearchRequest, WordSearchResponse } from "../../types/word-search.interface"
import { searchWords } from "../../api/word-search"

type FormValues = {
  matrix: string
  words: string
}

export default function WordSearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const [result, setResult] = useState<WordSearchResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FormValues) => {
    const matrix = data.matrix
      .trim()
      .split("\n")
      .map((row) => row.split(",").map((c) => c.trim().toUpperCase()))

    const words = data.words
      .trim()
      .split(/[\n,]+/)
      .map((w) => w.trim().toUpperCase())
      .filter(Boolean)

    const payload: WordSearchRequest = { matrix, words }

    try {
      setLoading(true)
      const response = await searchWords(payload)
      setResult(response)
    } catch (error) {
      console.error(error)
      alert("Error al buscar palabras.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="word-search-container">
      <header className="header">
        <h1 className="title">
          Buscador de palabras <span className="title-accent">Analizador</span>
        </h1>
        <p className="subtitle">Analiza tu sopa de letras con la mejor tecnología</p>
      </header>

      <section className="form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
          <fieldset className="input-group">
            <legend className="input-label">📊 Matriz (14x14, separada por comas)</legend>
            <textarea
              className={`matrix-input ${errors.matrix ? "input-error" : ""}`}
              rows={8}
              placeholder="N,D,E,K,I,C,A,N,G,U,R,O,G,E&#10;D,F,G,M,J,F,L,A,N,G,P,Q,R,S&#10;E,A,B,C,D,E,F,G,H,I,J,K,L,M&#10;..."
              {...register("matrix", { required: "La matriz es obligatoria" })}
            />
            {errors.matrix && <span className="error-message">{errors.matrix.message}</span>}
          </fieldset>

          <fieldset className="input-group">
            <legend className="input-label">🔍 Palabras a buscar</legend>
            <textarea
              className={`words-input ${errors.words ? "input-error" : ""}`}
              rows={4}
              placeholder="GATO, PERRO, JAGUAR&#10;LEÓN, TIGRE"
              {...register("words", { required: "Debes ingresar al menos una palabra" })}
            />
            {errors.words && <span className="error-message">{errors.words.message}</span>}
          </fieldset>

          <button type="submit" disabled={loading} className="submit-button">
            {loading ? "🔄 Analizando..." : "🚀 Analizar Sopa de Letras"}
          </button>
        </form>
      </section>

      {result && (
        <section className="results-card">
          <header className="results-header">
            <h2>📋 Resultados del Análisis</h2>
          </header>

          <div className="results-grid">
            <article className="found-words">
              <h3 className="results-title found">✅ Encontradas ({result.encontrado.length})</h3>
              <ul className="words-list">
                {result.encontrado.map((word) => (
                  <li key={word} className="word-item found-item">
                    {word}
                  </li>
                ))}
              </ul>
            </article>

            <article className="not-found-words">
              <h3 className="results-title not-found">❌ No encontradas ({result.noEncontrado.length})</h3>
              <ul className="words-list">
                {result.noEncontrado.map((word) => (
                  <li key={word} className="word-item not-found-item">
                    {word}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      )}
    </main>
  )
}
