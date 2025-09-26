import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import UserList from './components/UserList'

export default function App() {
  const [usuarios, setUsuarios] = useState([])
  const [filtrados, setFiltrados] = useState([])
  const [error, setError] = useState(null)
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)



  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3001/usuarios')
      setUsuarios(response.data)
      setFiltrados(response.data)
    } catch (err) {
      setError('Error al cargar usuarios')
      console.log(err)
    }
  }

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  const filtrarUsuarios = useCallback((query) => {
    const q = query.trim().toLowerCase()
    const resultados = usuarios.filter(usuario =>
      [usuario.nombre, usuario.apellidos, usuario.perfil, usuario.intereses, usuario.correo].some(campo =>
        String(campo).toLowerCase().includes(q)
      )
    )
    setFiltrados(resultados)
  }, [usuarios])

  const seleccionarUsuario = (usuario) => setUsuarioSeleccionado(usuario)
  const cerrarModal = () => setUsuarioSeleccionado(null)

  return (
    <UserList
      filtrados={filtrados}
      error={error}
      onSearch={filtrarUsuarios}
      onSelectUser={seleccionarUsuario}
      usuarioSeleccionado={usuarioSeleccionado}
      onCloseModal={cerrarModal}
    />
  )
}
