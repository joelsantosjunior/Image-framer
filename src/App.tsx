import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
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
