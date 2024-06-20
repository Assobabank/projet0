import React, { useState } from 'react';
import './Form.css'; // Assurez-vous d'importer le fichier CSS
import { Link } from 'react-router-dom';
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    city: '',
    zip: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefaultUsername">Username</label>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="validationDefault04"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Zip</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="Zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={formData.agree}
              id="invalidCheck2"
              name="agree"
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <Link to="/thank">
        <button className="btn btn-primary" type="submit">Submit form</button>
        </Link>

      </form>
    </div>
  );
};

export default Form;
