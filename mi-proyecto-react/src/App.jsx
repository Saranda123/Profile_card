import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AboutMe from './pages/about_me'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Projectsa from './pages/projectsa'
import Projectsb from './pages/projectsb'


import './styles/Sass/app.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><AboutMe /><Projects /><Contact /></>} />
        <Route path="/projectsa" element={<Projectsa />} />
        <Route path="/projectsb" element={<Projectsb />} />
      </Routes>
    </Router>
  )
}

export default App
