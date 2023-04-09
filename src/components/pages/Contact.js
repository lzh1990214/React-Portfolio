import React, { useState } from 'react';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // function to validate if an input match email format with regex
  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    // validate input value in the email form constantly and check with regex
    let validationResult = validateEmail(event.target.value);
    if (!validationResult) {
      setEmail(event.target.value);
      setEmailError(true);
    }
    else {
      setEmail(event.target.value);
      setEmailError(false);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(false);
  };

  // This function is called on the `onBlur` event of each input field in the form, when user
  // move the cursor out of a field, validation check of the form will be triggered
  const handleBlur = (event) => {
    const { name } = event.target;
    // validate input value in the email form constantly and check with regex
    let validationResult = validateEmail(event.target.value);
    // console.log(validationResult);

    if (name === 'name') {
      setNameError(event.target.value === '');
    }
    else if (name === 'message') {
      setMessageError(event.target.value === '');
    }
    // if the element name is 'email' or the input doesn't match email format, an error will show up
    else if (name === 'email' || validationResult === false) {
      setEmailError(event.target.value === '');
      setEmailError(true);
    }
  }

  return (
    <div className="container-md d-flex flex-column align-items-center mt-5">
      <h1>Contact</h1>
      <div className='container w-75'>
        <div className='row'>
          <div className='col'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${nameError ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleBlur}
                  name="name"
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">
                    Please enter your name.
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleBlur}
                  name="email"
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className={`form-control ${messageError ? 'is-invalid' : ''}`}
                  id="message"
                  placeholder="Enter your message"
                  rows={3}
                  value={message}
                  onChange={handleMessageChange}
                  onBlur={handleBlur}
                  name="message"
                  required
                />
                {messageError && (
                  <div className="invalid-feedback">
                    Please enter a message.
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
