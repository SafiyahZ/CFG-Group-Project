import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    petsName: '',
    species: '',
    email: '',
    image: '',
    imageCaption: '',
  });

  const handleChange = (e) => {
    const { index, value } = e.target;
    setFormData({
      ...formData,
      [index]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit the form data goes here
    console.log(formData);
    // Reset the form fields
    setFormData({
      petsName: '',
      species: '',
      email: '',
      image: '',
      imageCaption: '',
    });
  };

  return (
    <div className="contact-form">
      <div>
        <h2>Send us your pet pics</h2>

        <p>
          Hey, get in touch and send us a cute pic of your pet by entering the
          image URL below. Any further questions, email us at{' '}
          <a
            style={{ color: 'blue', textDecoration: 'underline' }}
            href="customersupport@pawsitivevibes.com"
          >
            customersupport@pawsitivevibes.com
          </a>
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Pet Name:</label>
          <input
            type="text"
            id="petsName"
            name="petsName"
            value={formData.petsName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Species:</label>
          <input
            type="text"
            id="species"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="image">Image:</label>
          <input
            type="text"
            placeholder="Enter image url"
            value={formData.image}
            onChange={handleChange}
          />

          <label htmlFor="imageCaption">Image Caption:</label>
          <textarea
            id="imageCaption"
            name="imageCaption"
            value={formData.imageCaption}
            onChange={handleChange}
            required
          ></textarea>

          <div>
            <button className="button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

