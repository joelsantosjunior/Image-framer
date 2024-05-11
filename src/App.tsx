import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UploadPage from './pages/upload'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={UploadPage}></Route>
        <Route path="/view"></Route>
        <Route path="/frame"></Route>
        <Route path="/download"></Route>
      </Routes>
    </Router>
  )
}

export default App
