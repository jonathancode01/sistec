// frontend/src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          🚀 Frontend Rodando!
        </h1>
        <p className="text-xl text-green-400">
          React + Tailwind + Docker
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Testar API
        </button>
      </div>
    </div>
  )
}

export default App