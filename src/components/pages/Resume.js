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
        <div className="col mb-4">
          <h1 className='page-title'>Resume</h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <button className="btn text-white" id='download-btn' onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>

      <div class="container">
        <div class="row">

          <div class="col-lg-4 mb-3">
            <div class="card" id='uxd-card'>
              <div className="card-body">
                <div class="card-title mb-4 proficiency-text">
                  <h3>UXD Proficiencies</h3>
                </div>
                <div class="card-text text-start proficiency-text">
                  <p>User Research</p>
                  <p>Information Architecture</p>
                  <p>Interaction Design</p>
                  <p>Visual Design</p>
                  <p>Prototyping and Testing</p>
                  <p>Collaboration</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-3">
            <div class="card" id='fe-card'>
              <div className="card-body">
                <div class="card-title mb-4 proficiency-text">
                  <h3>Front-End Proficiencies</h3>
                </div>
                <div class="card-text text-start proficiency-text">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                  <p>Bootstrap</p>
                  <p>Bulma</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-3">
            <div class="card" id='be-card'>
              <div className="card-body">
                <div class="card-title mb-4 proficiency-text">
                  <h3>Back-End Proficiencies</h3>
                </div>
                <div class="card-text text-start proficiency-text">
                  <p>Node.js</p>
                  <p>Express</p>
                  <p>SQL</p>
                  <p>MongoDB</p>
                  <p>RESTful API</p>
                  <p>MERN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
