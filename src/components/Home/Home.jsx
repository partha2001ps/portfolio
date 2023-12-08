import React, { useEffect, useState } from 'react';
import './home.css';

function Home() {
  const [text, setText] = useState("FULL STACK DEVELOPER (MERN)");

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

  return (
    <section id='Home' className='pro'>
      <div className='left'>
        <h1 className='greeting'>Hello, it's Me <span className='name'>Parthasarathi </span></h1>
        <p className='developer-description'>And I'm <span className='fsd'>{text}</span></p>
        <p className='additional-content'>
          I specialize in building end-to-end web applications using the MERN stack. With a strong foundation in both frontend and backend technologies, I bring creativity and efficiency to every project.
        </p>
      </div>
      <img className='profile-image' src="/image/photo.png" alt="" />
    </section>
  );
}

export default Home;
