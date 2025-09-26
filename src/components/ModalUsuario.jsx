export default function ModalUsuario({ usuario, onClose }) {
  if (!usuario) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded p-6 max-w-md w-full relative"
        onClick={handleModalClick} 
      >
        <button
          className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={usuario.foto}
          alt={`${usuario.nombre} ${usuario.apellidos}`}
        />
        <h2 className="text-xl font-bold text-center mb-2">
          {usuario.nombre} {usuario.apellidos}
        </h2>
        <p className="text-center text-gray-700 mb-1">{usuario.perfil}</p>
        <p className="italic text-center mb-2">{usuario.intereses}</p>
        <p className="text-blue-600 text-center">{usuario.correo}</p>
      </div>
    </div>
  );
}
