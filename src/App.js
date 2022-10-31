import './App.scss'
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
    
      
      <Layout></Layout>
        <Routes>
          
          <Route path="/" element={<Home />}>
            <Route index path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            
            <Route path="/skills" element={<Skills />} />
          </Route>

        </Routes>
    
    </>
  )
}

export default App
