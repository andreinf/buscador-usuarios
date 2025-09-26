import { useState, forwardRef, useImperativeHandle } from 'react'

const UserModal = forwardRef(({ }, ref) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null)

 
  useImperativeHandle(ref, () => ({
    abrirModal(usuario) {
      setUsuarioSeleccionado(usuario)
    },
    cerrarModal() {
      setUsuarioSeleccionado(null)
    }
  }))

  if (!usuarioSeleccionado) return null


  const handleModalClick = (e) => e.stopPropagation()

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={() => setUsuarioSeleccionado(null)}
    >
      <div
        className="bg-white rounded p-6 max-w-md w-full relative"
        onClick={handleModalClick} 
      >
        <button
          className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
          onClick={() => setUsuarioSeleccionado(null)}
          aria-label="Cerrar"
        >
          ×
        </button>

        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={usuarioSeleccionado.foto}
          alt={`${usuarioSeleccionado.nombre} ${usuarioSeleccionado.apellidos}`}
        />
        <h2 className="text-xl font-bold text-center mb-2">
          {usuarioSeleccionado.nombre} {usuarioSeleccionado.apellidos}
        </h2>
        <p className="text-center text-gray-700 mb-1">{usuarioSeleccionado.perfil}</p>
        <p className="italic text-center mb-2">{usuarioSeleccionado.intereses}</p>
        <p className="text-blue-600 text-center">{usuarioSeleccionado.correo}</p>
      </div>
    </div>
  )
})

export default UserModal
