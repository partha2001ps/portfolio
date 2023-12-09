import React, { useEffect, useState, useRef } from 'react';
import './home.css';
import Social from '../social/Social';

function Home() {
  const [text, setText] = useState("FULL STACK DEVELOPER (MERN)");
  const contactRef = useRef(null);

  const animateTitle = (text, setText) => {
    setText('');
    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        setText(prevText => prevText + letter);
      }, index * 300);
    });
  };

  useEffect(() => {
    animateTitle('FULL STACK DEVELOPER (MERN)', setText);

    const intervalId = setInterval(() => {
      animateTitle('FULL STACK DEVELOPER (MERN)', setText);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  const handleResumeClick = () => {
    const resumeUrl = 'https://drive.google.com/file/d/11FR_gQYw_ddH-i5u0_htY_9KDRIsADNV/view';
    window.open(resumeUrl, '_blank'); 
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='Home' className='pro'>
      <div className='left'>
        <h1 className='greeting'>Hello, it's Me <span className='name'>Parthasarathi </span></h1>
        <p className='developer-description'>And I'm <span className='fsd'>{text}</span></p>
        <p className='additional-content'>
          I specialize in building end-to-end web applications using the MERN stack. With a strong foundation in both frontend and backend technologies, I bring creativity and efficiency to every project.
        </p>
        <section id='Content'>
          <button onClick={scrollToContact}>Contact</button><button onClick={handleResumeClick}>View Resume</button>
        </section>
      </div>
      <div class='right'>
  <div class='profile-container'>
    <img class='profile-image' src="/image/photo.png" alt="profile-image" />
    <div class='social'>
      <Social />
    </div>
  </div>
</div>
 <div ref={contactRef}></div>
   
    </section>
  );
}

export default Home;
