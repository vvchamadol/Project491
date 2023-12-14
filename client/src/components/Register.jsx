import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', form);
      console.log(response.data);  // Assuming the server returns useful data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      Register

      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type="text"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <input
          type="text"
          name="surname"
          placeholder="Surname"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <input
          type="text"
          name="tel"
          placeholder="Tel"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <input
          type="text"
          name="username"
          placeholder="User Name"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
