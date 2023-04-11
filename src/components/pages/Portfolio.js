import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Portfolio() {

  const projects = [
    {
      title: 'GreenThumb',
      description: 'Front-end Application',
      image: './asset/img/greenthumb.png',
      github: 'https://github.com/lzh1990214/GreenThumb',
      deploy: 'https://lzh1990214.github.io/GreenThumb/'
    },
    {
      title: 'AnimalAmigos',
      description: 'Full-stack Application',
      image: './asset/img/animalamigos.png',
      github: 'https://github.com/lzh1990214/Animal-Amigos',
      deploy: 'https://animal-amigos-4.herokuapp.com/'
    },
    {
      title: 'Tech-Blog',
      description: 'Full-stack Application',
      image: './asset/img/tech-blog.png',
      github: 'https://github.com/lzh1990214/Tech-Blog',
      deploy: 'https://tech-blog-lee.herokuapp.com/'
    },
    {
      title: 'Weather Dashboard',
      description: 'Front-end Application',
      image: './asset/img/weather-dashboard.png',
      github: 'https://github.com/lzh1990214/Weather-Dashboard',
      deploy: 'https://lzh1990214.github.io/Weather-Dashboard/'
    },
    {
      title: 'Pokémon Trivia Quiz',
      description: 'Front-end Application',
      image: './asset/img/pokemon-quiz.png',
      github: 'https://github.com/lzh1990214/quiz',
      deploy: 'https://lzh1990214.github.io/quiz/'
    },
    {
      title: 'Note Taker',
      description: 'Full-stack Application',
      image: './asset/img/note-taker.png',
      github: 'https://github.com/lzh1990214/Note-Taker',
      deploy: 'https://note-taker-zl.herokuapp.com/'
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };


  return (
    <div className="container-sm d-flex flex-column align-items-center mt-5" >
      <h1 className='mb-5 page-title'>Portfolio</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">

          {projects.map((project, index) => (
            <div key={index} className="col mb-4">
              {/* wrap each project card in anchor element and link to the deployed application */}
              <a href={project.deploy} target="_blank" rel="noreferrer">
                <div
                  className="card"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <img src={project.image} alt={project.title} className="card-img-top" />
                  {hoveredProject === index && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center">
                      <div className="card-img-overlay" style={{ backgroundColor: '#a79d93' }}></div>
                      <div className="card-img-overlay position-relative d-flex flex-column justify-content-center" >
                        {/* add an inline GitHub icon to navigate to the GitHub repo */}
                        <h5 className="card-title">{project.title}
                          <span ><a href={project.github} style={{ backgroundColor: '#a79d93' }}>
                            <FaGithub className="ms-3" size={30} style={{ backgroundColor: '#a79d93' }} />
                          </a></span></h5>
                        <p className="card-text">{project.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
