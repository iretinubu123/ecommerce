import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container-custom py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
        <div className="card p-6">
          <p className="text-center text-gray-600 mb-4">
            Registration form is under construction.
          </p>
          <Link to="/login" className="btn btn-primary w-full">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 