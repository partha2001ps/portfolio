import React from 'react'
import Home from './components/Home/Home'
import Projects from './components/projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Content from './components/Content/Content'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Projects />
      <Skills />
      <Education />
      <Content/>
    </div>
  )
}

export default App