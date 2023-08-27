import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed.');
    }
  };

  return (
	<div className="form-container">
		<h1>REGISTER</h1>
    <form onSubmit={handleSubmit} >
		<h5>Name</h5>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
	   <h5>Email</h5>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
	  <h5>Password</h5>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
	  <h5>Confirm Password</h5>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
	</div>
  );
};

export default Register;
