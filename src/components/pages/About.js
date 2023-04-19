import React from 'react';

export default function About() {
  return (
    <div className="container-sm d-flex flex-column align-items-center mt-5" id='about' >
      <h1 className='mb-3 page-title'>About Me</h1>
      {/* add profile image */}
      <div className="text-center mb-3">
        <img src="./asset/img/Zhihao-Li.jpeg" className="rounded-circle" id="img-profile-round" />
      </div>

      <div className='w-75'>
        Zhihao Li is a licensed landscape architect with over seven years of experience designing and managing projects of various scales at AECOM in Washington D.C.. He holds a Master's degree in Landscape Architecture from Rhode Island School of Design, where he developed his skills in site analysis, artistic view, and creative problem-solving.
      </div>
      <br />
      <div className='w-75'>
        However, Zhihao's passion for technology led him to pursue a career transition into the UX field, and he earned an MPS in UX Design from Maryland Institute College of Art. To further enhance his technical expertise, he recently completed a Full-Stack Development Certificate from the George Washington University bootcamp, where he acquired skills such as HTML, CSS, JavaScript, MongoDB, Express, React and Node.js.
      </div>
      <br />
      <div className='w-75'>
        Zhihao's background in landscape architecture, education in UX design, and technical proficiency in full-stack development make him a versatile designer capable of tackling complex challenges from multiple perspectives. He believes that his unique combination of skills enables him to design innovative digital products that not only look eye-catching but also function to enhance the user experience.
      </div>
      <br />
      <div className='w-75'>
        Zhihao is a dedicated worker who is always eager to learn and grow. He enjoys keeping up with the latest trends in design and technology and applying his knowledge to his work. When not working, Zhihao loves to travel, take photographs, and learn new languages.
      </div>
    </div>
  );
}
