import './App.css'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import ImageView from './pages/ImageViewPage'
import { ImageContext } from './ImageContext'
import { useState } from 'react'
import FrameSelectionPage from './pages/FrameSelectionPage'

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
            <button className="px-2 py-2 color-white bg-blue-400 m-4 rounded">
              <Link className="text-white" to={'/'}>
                Página Inicial
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
      </ImageContext.Provider>
    </BrowserRouter>
  )
}

export default App
