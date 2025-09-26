import { useState } from "react"
import { useAuth } from "../context/AuthContext.jsx"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login, loading } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    
    if (!username.trim() || !password.trim()) {
      setError("Por favor, completa todos los campos")
      return
    }
    
    login(username, password)
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center">LOGIN PAGE</h2>
        
        {error && (
          <div className="bg-red-200 text-red-800 p-2 rounded text-center">
            {error}
          </div>
        )}
        
        <label className="font-semibold" htmlFor="username">Username:</label>
        <input 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="border border-gray-300 rounded p-2" 
          type="text" 
          id="username" 
          disabled={loading}
        />
        
        <label className="font-semibold" htmlFor="password">Password:</label>
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border border-gray-300 rounded p-2" 
          type="password" 
          id="password" 
          disabled={loading}
        />
        
        <button 
          className={`rounded p-2 text-white ${
            loading 
              ? 'bg-gray-400' 
              : 'bg-blue-500'
          }`} 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Login'}
        </button>
      </form>
    </div>
  )
}