import './App.css'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import ImageView from './pages/ImageViewPage'
import { ImageContext } from './ImageContext'
import { useState } from 'react'
import FrameSelectionPage from './pages/FrameSelectionPage'
import Footer from './components/Footer'

function App() {
  const value = {
    imageSrc: '',
    frame: '',
    result: null,
  }

  const imageState = useState<ImageContext>(value)

  return (
    <BrowserRouter>
      <ImageContext.Provider value={imageState}>
        <header className="header h-8">
          <div className="home-button absolute">
            <button className="px-4 py-2 shadow-md color-white bg-primary-blue-100 font-display m-4 rounded">
              <Link className="text-white flex flex-row gap-2" to={'/'}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                    fill="white"
                  />
                </svg>
                <span>Página Inicial</span>{' '}
              </Link>
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<UploadPage />}></Route>
          <Route path="/view" element={<ImageView />}></Route>
          <Route path="/frame" element={<FrameSelectionPage />}></Route>
          <Route path="/download"></Route>
        </Routes>
        <Footer>
          Feito com 💚 + 🍕 por{' '}
          <a href="https://joelsantos.dev" target="_blank">
            Joel Santos
          </a>
        </Footer>
      </ImageContext.Provider>
    </BrowserRouter>
  )
}

export default App
