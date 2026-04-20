import React, { useRef } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      message: messageRef.current.value
    };
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          ref={nameRef}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          ref={phoneRef}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          ref={addressRef}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          ref={messageRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;
