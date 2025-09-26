import Card from './Card'
import SearchInput from './SearchInput'
import ModalUsuario from './ModalUsuario'
import { useAuth } from '../context/AuthContext'

export default function UserList({
  filtrados,
  error,
  onSearch,
  onSelectUser,
  usuarioSeleccionado,
  onCloseModal,
}) {
  const { logout, user } = useAuth()
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header con título y botón de logout - más pequeño y discreto */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-center flex-1">Buscador de Usuarios</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Hola, {user?.username}</span>
          <button 
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
          >
            Salir
          </button>
        </div>
      </div>

      <SearchInput onSearch={onSearch} />

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {filtrados.map(usuario => (
          <div key={usuario.id} onClick={() => onSelectUser(usuario)}>
            <Card usuario={usuario} />
          </div>
        ))}
      </div>

      {filtrados.length === 0 && !error && (
        <div className="text-center text-gray-500 mt-8">
          <p>No se encontraron usuarios</p>
        </div>
      )}

      {usuarioSeleccionado && (
        <ModalUsuario usuario={usuarioSeleccionado} onClose={onCloseModal} />
      )}
    </div>
  )
}
