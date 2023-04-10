import React from 'react';

export default function Portfolio() {

  const projects = [
    {
      title: 'GreenThumb',
      description: 'Front-end Application',
      image: './asset/img/greenthumb.png'
    },
    {
      title: 'AnimalAmigos',
      description: 'Full-stack Application',
      image: './asset/img/animalamigos.png'
    },
    {
      title: 'Tech-Blog',
      description: 'Full-stack Application',
      image: './asset/img/tech-blog.png'
    },
    {
      title: 'Weather Dashboard',
      description: 'Front-end Application',
      image: './asset/img/weather-dashboard.png'
    },
    {
      title: 'Pokémon Trivia Quiz',
      description: 'Front-end Application',
      image: './asset/img/pokemon-quiz.png'
    },
    {
      title: 'Note Taker',
      description: 'Full-stack Application',
      image: './asset/img/note-taker.png'
    },
  ];

  return (
    <div className="container-sm d-flex flex-column align-items-center mt-5" >
      <h1 className='mb-5'>Portfolio</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col mb-4">
              <div className="card">
                <div className="card-img-top position-relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-100" />
                  <div className="card-img-overlay d-flex flex-column justify-content-center text-black">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



  );
}
