import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import AboutMe from './Pages/about_me'
import Projects from './Pages/projects'
import Contact from './Pages/contact'
import HTML from './Pages/html'
import React from './Pages/react'


import './Styles/Sass/app.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><AboutMe /><Projects /><Contact /></>} />
        <Route path="/html" element={<HTML />} />
        <Route path="/react" element={<React />} />
      </Routes>
    </Router>
  )
}

export default App
