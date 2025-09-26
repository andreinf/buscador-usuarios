import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SimpleAlert from '../components/SimpleAlert'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ show: false, message: '', type: 'info' })
  const navigate = useNavigate()

  const login = async (username, password) => {
    setLoading(true)
    
    // Simular una llamada a API con delay
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        setUser({ username: 'admin' })
        setAlert({ show: true, message: '¡Login exitoso!', type: 'success' })
        setTimeout(() => {
          setAlert({ show: false, message: '', type: 'info' })
          navigate('/usuarios')
        }, 1500)
      } else {
        setAlert({ show: true, message: 'Credenciales incorrectas', type: 'error' })
      }
      setLoading(false)
    }, 1500) // 1.5 segundos de carga para mostrar el spinner
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  const closeAlert = () => {
    setAlert({ show: false, message: '', type: 'info' })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, alert, closeAlert }}>
      {children}
      <SimpleAlert 
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={closeAlert}
      />
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}