import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser, selectAuthLoading, selectAuthError } from '../../features/auth/authSlice.js';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password }));
  };

  return (
    <div className="auth-form min-h-screen flex flex-col items-center justify-start bg-gray-50 pt-26 py-4 px-4 sm:px-6 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#b31f29]" >Sign Up</h2>
      </div>
      <div className="auth-form-container  bg-white pt-10 pb-10 px-6 sm:px-10 rounded-xl shadow-2xl w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button type="submit" disabled={loading === 'pending'}
        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#b31f29] hover:bg-[#9c1b24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b31f29] transition-colors duration-150">
          {loading === 'pending' ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="text-sm text-center space-y-2 pt-4">
        <p >Already have an account? <Link to="/Login">Sign In</Link></p>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
