import React from 'react';

export default function Resume() {
  const downloadResume = () => {
    // Function to download resume PDF
    const link = document.createElement('a');
    link.href = './asset/ZHIHAO_RESUME_2022-A.pdf';
    link.download = 'ZHIHAO_RESUME_2022-A.pdf';
    link.click();
  };

  return (
    <div className="container-sm d-flex flex-column align-items-center mt-5">

      <div className="row">
        <div className="col">
          <h1>Resume</h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <button className="btn btn-primary" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h3>Front-End Proficiencies</h3>
              </div>
              <div class="card-body text-start">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Bulma.io</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h3>Back-End Proficiencies</h3>
              </div>
              <div class="card-body text-start">
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                  <li>MERN</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
