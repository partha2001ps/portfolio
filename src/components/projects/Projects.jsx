import React, { useEffect, useState } from 'react'
import './porjects.css'
function Projects() {
  const projects = [
    {
      "type": "full",
      "title": "Zen Class Clone",
      "description": "Zen Class Clone is a web application designed to facilitate Zen class queries and tasks for a serene learning experience for students & montor application.",
      "toolsUsed": ["React", "MongoDB", "Node.js"],
      "image": "https://i.postimg.cc/W4hXgM81/Screenshot-2023-12-29-155328.png",
      "sourceCode": "https://github.com/partha2001ps/zendesk-frontend",
      "liveDemo": "https://candid-pudding-d739b9.netlify.app/"
    },
    {
      "type": "full",
      "title": "Chat Application",
      "description": "Chat Application is an interactive messaging platform, utilizing Socket.IO for real-time communication nd efficient conversations among users.",
      "toolsUsed": ["socket Io", "React", "Node.js"],
      "image": "https://i.postimg.cc/g2S4MdGV/Screenshot-2024-03-13-204240.png",
      "sourceCode": "https://github.com/partha2001ps/chatApp-FE",
      "liveDemo": "https://chatapplicationca.netlify.app/"
    },
    {
      "type": "full",
      "title": "CRM",
      "description": "CRM is a customer relationship management system designed to streamline interactions with customers.",
      "toolsUsed": ["Json Token", "React", "Node.js","Nodemiler","Authorization"],
      "image": "https://i.postimg.cc/NFcz8PWp/Screenshot-2024-03-09-175722.png",
      "sourceCode": "https://github.com/partha2001ps/CRM-Frontend",
      "liveDemo": "https://customers-crm.netlify.app/"
    },
    {
      "type": "full",
      "title": "My Notes App",
      "description": "My Notes App is  managing personal notes effectively. With features for creating, editing, and deleting notes available ",
      "toolsUsed": ["React", "Node.js","Authorization"],
      "image": "https://i.postimg.cc/rwKwrCs8/Screenshot-2024-03-15-171636.png",
      "sourceCode": "https://github.com/partha2001ps/myToDo",
      "liveDemo": "https://notes-app-ps.netlify.app"
    },
    {
      "type": "mini",
      "title": "CRUD App with Axios",
      "description": "A React application implementing CRUD operations with Axios.read,write,delete and update",
      "toolsUsed": ["React", "Axios"],
      "image": "https://i.postimg.cc/LXqKTVVD/Screenshot-2023-12-31-101257.png",
      "sourceCode": "https://github.com/partha2001ps/React-axio",
      "liveDemo": "https://glistening-figolla-e580d4.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Rest Countries Weather",
      "description": "Displaying weather information for different countries with flag and capital.",
      "toolsUsed": ["javascript", "REST Countries API"],
      "image": "https://i.postimg.cc/SKwWvSh9/Screenshot-2023-12-30-103942.png",
      "sourceCode": "https://github.com/partha2001ps/tasks/tree/main/TASK11",
      "liveDemo": "https://quiet-dodol-c12728.netlify.app/task11/"
    },
    {
      "type": "mini",
      "title": "Dictionary App",
      "description": "Create a Dictionary that allows to search for words, providing on their part of speech verb and noun.",
      "toolsUsed": ["javascript", "Merriam-Webster API"],
      "image": "https://i.postimg.cc/FsWk6rbK/Screenshot-2023-12-31-095957.png",
      "sourceCode": " https://github.com/partha2001ps/tasks/tree/main/TASK12/dictionary",
      "liveDemo": " https://glistening-elf-6ba9ab.netlify.app/task12/dictionary/?"
    },
    {
      "title": "Weather App",
      "description": " Checking weather conditions worldwide search area to get weather with OpenWeatherMap API.",
      "toolsUsed": ["Javascript", "OpenWeatherMap API"],
      "image": "https://i.postimg.cc/Cxn56jLv/Screenshot-2023-12-30-104120.png",
      "sourceCode": "https://github.com/partha2001ps/tasks/tree/main/TASK12/weather",
      "liveDemo": "https://glistening-elf-6ba9ab.netlify.app/task12/weather/"
    },
    {
      "type": "mini",
      "title": "Blogs Platform",
      "description": " A blog platform created with React and Router for seamless navigation to Zen class some blogs to my web site...",
      "toolsUsed": ["React js","Router"],
      "image": "https://i.postimg.cc/cLt7MtqW/Screenshot-2023-12-31-100406.png",
      "sourceCode": "https://github.com/partha2001ps/router",
      "liveDemo": "https://ubiquitous-muffin-1f3c47.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Price Card Generator",
      "description": "A simple utility for generating price cards with total price and quanity using React",
      "toolsUsed": ["Use state", "CSS", "React"],
      "image": "https://i.postimg.cc/q73TTL9F/Screenshot-2023-12-31-100727.png",
      "sourceCode": "https://github.com/partha2001ps/useContext",
      "liveDemo": "https://warm-chaja-f780a1.netlify.app/"
    },
    
    {
      "type": "mini",
      "title": "Calculator App",
      "description": "A basic calculator application using DOM manipulation in JavaScript.Normal Math function..",
      "toolsUsed": ["DOM", "JavaScript"],
      "image": "https://i.postimg.cc/FR63LhPz/Screenshot-2023-12-30-103642.png",
      "sourceCode": "https://github.com/partha2001ps/tasks/tree/main/TASK9",
      "liveDemo": "https://glistening-elf-6ba9ab.netlify.app/task9/input"
    },
    {
      "type": "mini",
      "title": "Hall Booking (Backend)",
      "description": "Backend system for a hall booking application built with Node.js, Express, and MongoDB.",
      "toolsUsed": ["Node.js", "Express", "MongoDB"],
      "image": "https://i.postimg.cc/MpGsVp5b/Screenshot-2023-12-31-101432.png",
      "sourceCode": "https://github.com/partha2001ps/nodejs_filesystem/tree/BookingHall",
      "liveDemo": "https://hallbooking-vpzx.onrender.com/"
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterType, setFilterType] = useState(null);

  const itemsPerSlide = {
    lg: 4,
    md: 2,
    sm: 1
  };

  const handleCarouselClick = (index) => {
    setActiveIndex(index);
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const chunkProjects = projects.reduce((chunks, project, index) => {
    const chunkIndex = Math.floor(index / itemsPerSlide.lg);

    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }

    chunks[chunkIndex].push(project);

    return chunks;
  }, []);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const filteredProjects = filterType ? projects.filter(project => project.type === filterType) : projects;

  const chunkFilteredProjects = filteredProjects.reduce((chunks, project, index) => {
    const largeDevice = Math.floor(index / itemsPerSlide.lg);
    const mediumDevice = Math.floor(index / itemsPerSlide.md);
    const smallDevice = Math.floor(index / itemsPerSlide.sm);
  
    let chunkIndex;
    if (windowWidth < 576) {
      chunkIndex = smallDevice;
    } else if (windowWidth < 992) {
      chunkIndex = mediumDevice;
    } else {
      chunkIndex = largeDevice;
    }
  
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
  
    chunks[chunkIndex].push(project);
  
    return chunks;
  }, []);
  

  return (
    <section id='Projects'>
      <h1 className='title'>Projects</h1>
      <div className="d-flex justify-content-center">
        <div className="filter-buttons mt-2 mt-sm-1 ">
          <button className='btn btn-outline-primary  mx-2 mt-4 mt-sm-1' onClick={() => handleFilter(null)}>All</button>
          <button className='btn btn-outline-primary mx-2 mt-4 mt-sm-1' onClick={() => handleFilter('full')}>Full Stack Projects</button>
          <button className='btn btn-outline-primary   mx-2 mt-4 mt-sm-1' onClick={() => handleFilter('mini')}>Mini Projects</button>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {Array.from({ length:chunkFilteredProjects.length }).map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active custom-indicator" : "custom-indicator"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleCarouselClick(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {chunkFilteredProjects.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={`carousel-item ${chunkIndex === activeIndex ? "active" : ""}`}>
              <div className="projects-container">
                {chunk.map((project, index) => (
                  <div key={index} className="project-card">
                    <h2 className='project-title'>{project.title}</h2>
                    <img className='img' src={project.image} alt={project.title} />
                    <p className='project-desc'>{project.description}</p>
                    <div className="tools-used">
                      <p>Tools Used: {project.toolsUsed.join(', ')}</p>
                    </div>
                    <div className="project-links">
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='icon-color'>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;