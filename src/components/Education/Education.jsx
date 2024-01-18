import React from 'react';
import './education.css';

function Education() {
  const education = [
    {
      "school": "AVS Engineering College Salem",
      "level": "BE",
      "title": "ELECTRONICS AND COMMUNICATION ENGINEERING",
      "percentage": 85,
      "description": "Successfully completed Bachelor of Engineering in Electronics and Communication Engineering (ECE) with First Class with Distinction from AVS Engineering College in 2023."
    },
    {
      "school": "Green Home Matric Hr. Sec. School, Omalur",
      "level": "HSC",
      "title": "High School",
      "percentage": 82,
      "description": "Completed Higher Secondary Education, achieving the position of school topper and securing the first rank at Green Home Matric Hr. Sec. School, Omalur."
    },
    {
      "school": "Government High school Kamalapuram",
      "level": "SSLC",
      "title": "Secondary School",
      "percentage": 92,
      "description": "Completed Secondary School Leaving Certificate (SSLC) with outstanding performance from Government High school Kamalapuram."
    }
  ];
  const handlecerteficate = () => {
    const certficate = 'https://drive.google.com/file/d/1PN4vp1KbbuyYWwY859s60ETpWnuTvMIS/view'
    window.open(certficate,'_blank')
}
  return (
    <section id='Education'>
       <h1 className='title'>Education</h1>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className='edu-title' data-text={edu.title}>{edu.title}</h3>
            <p className='edu-school'>{edu.school}</p>
            <p className='edu-per'>{edu.level} - {edu.percentage}%</p>
            <p className='edu-desc'>{edu.description}</p>
            
          </div>
        ))}
      </div>
      <h1 className='title'id='cert'>Certefication</h1>
      <div className="education-container">
    <div className='education-item mb-5 '>
        <h3 className='edu-title'>FULL STACK DEVELOPMENT (MERN)</h3>
        <p className='edu-school'>GUVI Chennai</p>
          <p className='edu-desc'>The Full Stack Development (MERN) course at GUVI Chennai provided comprehensive training in MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend development. </p>
          <div className="d-flex justify-content-center align-items-center">
  <button className='btn btn-outline-primary' onClick={handlecerteficate}>View Certificate</button>
</div>

    </div>
</div>

    </section>
  );
}

export default Education;
