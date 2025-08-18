import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}
const supabase = createClient(supabaseUrl, supabaseKey)

interface FormData {
  name: string
  email: string
  github_url: string
  demo_url: string
}

export default function SubmitChallenge() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    github_url: '',
    demo_url: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Submit to Supabase
      const candidateData = {
        name: formData.name,
        email: formData.email,
        github_url: formData.github_url,
        demo_url: formData.demo_url || null
      }
      
      const { error } = await supabase
        .from('candidates')
        .insert([candidateData])
        .select()
        .single()
      
      if (error) {
        throw error
      }
      
      // Trigger automatic evaluation (but don't show score to candidate)
      try {
        await supabase.functions.invoke('evaluate-candidate', {
          body: {
            github_url: candidateData.github_url,
            candidate_email: candidateData.email,
            candidate_name: candidateData.name,
            demo_url: candidateData.demo_url
          }
        })
        console.log('✅ Automatic evaluation completed')
      } catch (evalError) {
        // Edge Function not deployed yet - candidate saved but evaluation pending
        console.warn('⚠️ Evaluation pending - Edge Function not available:', evalError)
        // Continue with form submission - RRHH can evaluate manually via dashboard
      }
      
      // Evaluation will be processed server-side
      // No immediate score shown to prevent gaming
      
      setShowSuccess(true)
      setFormData({ name: '', email: '', github_url: '', demo_url: '' })
      
    } catch (error: any) {
      setError(error.message || 'Error al enviar el challenge')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (showSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ¡Challenge enviado exitosamente!
          </h2>
          <div className="text-green-700 space-y-3">
            <p><strong>¡Tu solución ha sido enviada exitosamente!</strong></p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium">⚠️ IMPORTANTE:</p>
              <p className="text-blue-700 text-sm mt-1">
                Solo se evaluará tu <strong>PRIMER envío</strong>. Cualquier fork o envío posterior no será considerado.
              </p>
            </div>
            <p>Te contactaremos en las próximas 24-48 horas con los resultados.</p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Enviar otro candidato
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            👤 Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Ej: María González"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            📧 Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="tu.email@ejemplo.com"
          />
        </div>

        <div>
          <label htmlFor="github_url" className="block text-sm font-medium text-gray-700 mb-2">
            🔗 URL de tu repositorio GitHub
          </label>
          <input
            type="url"
            id="github_url"
            name="github_url"
            value={formData.github_url}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="https://github.com/tu-usuario/frontend-challenge"
          />
          <p className="text-sm text-gray-500 mt-1">
            URL de tu fork con la solución implementada
          </p>
        </div>

        <div>
          <label htmlFor="demo_url" className="block text-sm font-medium text-gray-700 mb-2">
            🚀 URL del Demo (Opcional)
          </label>
          <input
            type="url"
            id="demo_url"
            name="demo_url"
            value={formData.demo_url}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="https://tu-challenge.vercel.app"
          />
          <p className="text-sm text-gray-500 mt-1">
            Si desplegaste tu solución en Vercel, Netlify, etc.
          </p>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <span className="text-red-500 text-xl mr-2">❌</span>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '⏳ Evaluando...' : '🚀 Enviar Challenge'}
        </button>
      </form>
    </div>
  )
}