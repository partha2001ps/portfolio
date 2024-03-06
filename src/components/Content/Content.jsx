import React, { useRef, useState } from 'react';
import './Content.css';
import Social from '../social/Social';
import emailjs from '@emailjs/browser';

function Content() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
      emailjs.sendForm('service_kd9nwwd', 'template_7p0iedf', formRef.current, 'Z3ag6WPdi66ndtc4q')
        .then((result) => {
          console.log(result.text);
          setFormData({ name: '',
          email: '',
          message: ''})
        }, (error) => {
            console.log(error.text);
        });

  };

  return (
    <section id='Contact' className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='d-block'>
        <div>
          <h1 className='title  mb-5 mt-4  text-center'>Contact Me</h1>
        </div>
        <form ref={formRef}  onSubmit={handleSubmit}>
          <div className='form-group m-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Enter Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group m-3'>
            <input
              className='form-control'
              type='email'
              placeholder='Enter Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group m-3'>
            <textarea
              className='form-control'
              cols='50'
              rows='5'
              placeholder='Message'
              name='message'
              value={formData.message}
              onChange={handleChange}
             required
            ></textarea>
          </div>
          <div className='form-group m-3'>
            <button type='submit' className='btn btn-primary btn-block'>Send it</button>
          </div>
          <div>
            <h2 className='text-danger m-2 text-center'>Get In Touch Me</h2>
          </div>
          <div className=' d-flex  flex-column  '>
            <div className=' mx-auto m-2'>
            <Social />
         </div>
      </div>
        </form>
      </div>
    </section>
  );
}

export default Content;
