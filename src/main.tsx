import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth-context'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                        <AuthProvider>
                                <App />
                        </AuthProvider>
                </QueryClientProvider>
        </BrowserRouter>
)
