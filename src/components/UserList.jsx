import Card from './card'
import SearchInput from './SearchInput'
import ModalUsuario from './ModalUsuario'

export default function UserList({
  filtrados,
  error,
  onSearch,
  onSelectUser,
  usuarioSeleccionado,
  onCloseModal,
}) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Buscador de Usuarios</h1>

      <SearchInput onSearch={onSearch} />

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {filtrados.map(usuario => (
          <div key={usuario.id} onClick={() => onSelectUser(usuario)}>
            <Card usuario={usuario} />
          </div>
        ))}
      </div>

      {usuarioSeleccionado && (
        <ModalUsuario usuario={usuarioSeleccionado} onClose={onCloseModal} />
      )}
    </div>
  )
}
