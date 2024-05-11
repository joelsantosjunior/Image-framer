import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import UploadPage from './pages/Upload'
import ImageView from './pages/ImageView'
import { ImageContext } from './ImageContext'
import { useState } from 'react'

function App() {
  const value = {
    imageSrc: '',
    frame: '',
    result: '',
  }

  const imageState = useState<ImageContext>(value)

  return (
    <BrowserRouter>
      <ImageContext.Provider value={imageState}>
        <Routes>
          <Route path="/" Component={UploadPage}></Route>
          <Route path="/view" Component={ImageView}></Route>
          <Route path="/frame"></Route>
          <Route path="/download"></Route>
        </Routes>
      </ImageContext.Provider>
    </BrowserRouter>
  )
}

export default App
