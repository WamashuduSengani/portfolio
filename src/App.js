import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
