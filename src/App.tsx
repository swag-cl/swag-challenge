import { useState } from 'react'
import HomePage from './components/HomePage'
import FormPage from './components/FormPage'

type Page = 'home' | 'form'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const navigateToForm = () => setCurrentPage('form')
  const navigateToHome = () => setCurrentPage('home')

  if (currentPage === 'form') {
    return <FormPage onNavigateToHome={navigateToHome} />
  }

  return <HomePage onNavigateToForm={navigateToForm} />
}

export default App