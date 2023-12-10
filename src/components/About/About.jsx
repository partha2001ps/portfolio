import React from 'react';
import './about.css';

function About() {
  return (
    <section id='About'>
      <h1 className='title'>About</h1>
      <div className="card1">
        <div className='right-img'>
          <div className='partha'>
                    <img src="/image/man.png" alt="Profile-photo" /></div>
                    <div className='shape'>
                      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <path id="blob" d="M398.5,315Q380,380,315,422.5Q250,465,171,436.5Q92,408,99,329Q106,250,152,224Q198,198,224,142Q250,86,329.5,88.5Q409,91,413,170.5Q417,250,398.5,315Z" fill="orange"></path>
                      </svg>
          </div>
        </div>
        <div className='left-para'>
          <div className='about-content'>
          <p className='para'><span>I'm </span>a creative and encouraging team player skilled at effectively presenting ideas for organizational success. My strength lies in being a fast and self-learner. In my college final year project, I demonstrated leadership as a team leader, successfully managing the project. My goal is to attain a prominent position in my career and embark on a world tour. Outside of work, my hobbies include playing chess, Free Fire, and exploring new places on bikes..</p>
        </div>
        </div >
      </div>
    </section>
  );
}

export default About;
