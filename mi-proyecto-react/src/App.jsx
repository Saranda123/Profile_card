import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import AboutMe from './Pages/about_me'
import Projects from './Pages/projects'
import Contact from './Pages/contact'
import Projectsa from './Pages/projectsa'
import Projectsb from './Pages/projectsb'


import './Styles/Sass/app.scss'

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
