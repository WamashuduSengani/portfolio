import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import HomePage from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='/home' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
