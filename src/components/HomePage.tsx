import JobDescription from './JobDescription'

interface HomePageProps {
  onNavigateToForm: () => void
}

export default function HomePage({ onNavigateToForm }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🎯 SWAG Challenge</h1>
          <p className="text-xl text-gray-600">Frontend Developer - Fast Track Position</p>
        </div>
        
        {/* Job Description */}
        <JobDescription onNavigateToForm={onNavigateToForm} />
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onNavigateToForm}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
          title="Ir al Challenge"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}