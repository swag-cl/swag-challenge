import SubmitChallenge from './SubmitChallenge'

interface FormPageProps {
  onNavigateToHome: () => void
}

export default function FormPage({ onNavigateToHome }: FormPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header with back button */}
        <div className="text-center mb-8">
          <button
            onClick={onNavigateToHome}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a información del puesto
          </button>
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
            <li>• Los mejores candidatos pasarán a video call</li>
            <li>• Decisión final en 48 horas máximo</li>
          </ul>
        </div>
        
        {/* Back to home link */}
        <div className="mt-8 text-center">
          <button
            onClick={onNavigateToHome}
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            ← ¿Necesitas revisar los detalles del puesto?
          </button>
        </div>
      </div>
    </div>
  )
}