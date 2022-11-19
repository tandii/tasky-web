import './styles/main.css'
import { Router } from './Router'
import { AuthGoogleProvider } from './contexts/authGoogle'

export function App() {
  return (
    <AuthGoogleProvider>
      <Router />
    </AuthGoogleProvider>
  )
}
