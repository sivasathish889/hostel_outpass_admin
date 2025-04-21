import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthProvider.jsx'

axios.defaults.baseURL = "http://localhost:5000/api/admin"

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
  </AuthProvider>,
)
