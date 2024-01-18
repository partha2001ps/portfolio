import React, { useEffect, useState, useRef } from 'react';
import './home.css';
import Social from '../social/Social';

function Home() {
  // const [text, setText] = useState("FULL STACK DEVELOPER (MERN)");
  // const contactRef = useRef(null);

  // const animateTitle = (text, setText) => {
  //   setText('');
  //   text.split('').forEach((letter, index) => {
  //     setTimeout(() => {
  //       setText(prevText => prevText + letter);
  //     }, index * 300);
  //   });
  // };

  // useEffect(() => {
  //   animateTitle('FULL STACK DEVELOPER (MERN)', setText);

  //   const intervalId = setInterval(() => {
  //     animateTitle('FULL STACK DEVELOPER (MERN)', setText);
  //   }, 9000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const handleResumeClick = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1dwEU183A6bgQOur6ixv9Atm4kgDW7ngc/view?usp=sharing';
    window.open(resumeUrl, '_blank'); 
  };
  
  return (
    <section id='Home' className='pro'>
      <div className='left'>
        <h1 className='greeting'>Hello, it's Me <span className='name'>Parthasarathi </span></h1>
        <p className='developer-description'>And I'm <span className='fsd'>FULL STACK DEVELOPER (MERN)</span></p>
        <p className='additional-content'>
          I specialize in building end-to-end web applications using the MERN stack. With a strong foundation in both frontend and backend technologies, I bring creativity and efficiency to every project.
        </p>
        <div id='Content'>
          <button className='b-css mt-3' ><a href="#Contact" className='tag-a'>Contact</a></button><button onClick={handleResumeClick} className='b-css mt-3'>View Resume</button>
        </div>
      </div>
      <div className='right'>
  <div className='profile-container'>
    <img className='profile-image' src="/image/photo.png" alt="profile-image" />
    <div className='social'>
      <Social />
    </div>
  </div>
</div>

   
    </section>
  );
}

export default Home;
