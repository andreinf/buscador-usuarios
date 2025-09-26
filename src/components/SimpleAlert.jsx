export default function SimpleAlert({ message, type = 'info', onClose, show }) {
  if (!show) return null;

  const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 
                  type === 'success' ? 'bg-green-100 border-green-400 text-green-700' :
                  'bg-blue-100 border-blue-400 text-blue-700';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`${bgColor} border rounded p-4 max-w-sm w-full mx-4 relative`}>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold cursor-pointer"
        >
          ×
        </button>
        <p className="text-center mt-2">{message}</p>
      </div>
    </div>
  );
}