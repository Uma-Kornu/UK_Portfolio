import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects_1 from './Components/Projects_1/Projects_1'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header/> 
      {/* <Navbar/> */}
      <About/>
      <Experience/>
      <Projects_1/>
      <Contact/> 
    </div>
  )
}

export default App