import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/header.jsx'
import { Navbar } from './components/navbar.jsx'
import App from './App.jsx'
import { Footer } from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <div className="min-h-screen flex flex-col">

        <Header />
        <Navbar />

        <main className="flex-grow">
          <App />
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  </StrictMode>,
)
