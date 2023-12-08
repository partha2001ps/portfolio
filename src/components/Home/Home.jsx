import React from 'react'
import './home.css'
function Home() {
  return (
    <section id='Home' className='pro'>
    <div >
      <h1 className='greeting'>Hello, it's Me <span className='name'>Parthasarathi </span></h1>
        <p className='developer-description'>And I'm Full Stack Developer (MERN)</p>
        <p className='additional-content'>
      I specialize in building end-to-end web applications using the MERN stack. With a strong foundation in both frontend and backend technologies, I bring creativity and efficiency to every project.
    </p></div>
      <img className='profile-image' src="/image/photo.png" alt="" />  
  </section>
  
  )
}

export default Home