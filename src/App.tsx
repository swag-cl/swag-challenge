import SubmitChallenge from './components/SubmitChallenge'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🎯 SWAG Challenge</h1>
          <p className="text-xl text-gray-600">Envía tu solución del challenge</p>
        </div>
        
        {/* Submit Component */}
        <SubmitChallenge />
        
        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-medium text-blue-800 mb-2">📋 Qué sucede después</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Tu código será evaluado automáticamente</li>
            <li>• Revisaremos bugs corregidos, funcionalidades y creatividad</li>
            <li>• Te enviaremos los resultados por email</li>
            <li>• Los mejores candidatos pasarán a video call</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App