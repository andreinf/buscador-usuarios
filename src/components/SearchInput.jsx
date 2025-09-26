import { useState, useEffect } from 'react'

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      onSearch('')
      setLoading(false)
      return
    }

    setLoading(true)
    const timeoutId = setTimeout(() => {
      onSearch(query)
      setLoading(false)
    }, 500) // 500 ms debounce

    return () => clearTimeout(timeoutId)
  }, [query, onSearch])

  return (
    <div className="relative w-full">
      <input
        className="w-full p-2 border border-gray-300 rounded shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Buscar por nombre, perfil o intereses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && (
        <div className="absolute right-3 top-2.5">
          <svg
            className="animate-spin h-5 w-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
