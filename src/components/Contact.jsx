import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data using EmailJS
    emailjs.send(
      'service_o1itdio',  
      'template_xyz',    
      formState,          
      'WaP1OiAbzgkLxANsl' 
    ).then(
      (result) => {
        alert('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' })
      },
      (error) => {
        alert('Failed to send message.');
      }
    );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Interested in Collaborating?
            </h3>
            <p>
              I’m always eager to connect with like-minded professionals, recruiters, 
              and organizations looking for top-notch Application  development expertise. 
              Whether you're offering an exciting career opportunity, freelance work, or 
              partnership, feel free to reach out. 
            </p>
            <p className='mt-4'>
              Let's discuss how my skills in frontend, backend, and full-stack development 
              can contribute to your projects and goals. I look forward to connecting with you.
            </p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-700 mr-2' />
              <a href="mailto:soumyaranjanoficial@gmail.com" className='hover:underline'>
                Email: soumyaranjanoficial@gmail.com
              </a>
            </div>
            <div className='mb-6'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>Phone: +91 6371763209</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span> Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Your Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <button 
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
