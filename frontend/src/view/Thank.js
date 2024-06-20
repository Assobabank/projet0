import React from 'react';
import { Link } from 'react-router-dom';
const Thank = () => {
  return (
    <div className="thank-page" style={{ background: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#333' }}>Thank You !</h1>
        <Link to="/">
    <button className='btn btn-success'>
        Return to the homepage
    </button>
    </Link>
    
      </div>
    </div>
  );
};

export default Thank;
