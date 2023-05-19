import React, { useState } from 'react';
import './AuthForm.css';
import Select from 'react-select';
import { Link } from "react-router-dom";


function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [branchOfService, setBranchOfService] = useState('');
  const [rank, setRank] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setCountry('');
    setBranchOfService('');
    setRank('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    // Add more countries as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process login or signup form submission
    if (isLogin) {
      // Handle login
    } else {
      // Handle signup
    }
  };

  return (
  <>
   <Link to={'/'}><h2>Back Home >></h2>
      </Link>
    <div className="auth-form">
      <h2 className="auth-form__title">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div className="auth-form__group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="auth-form__group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div className="auth-form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="auth-form__group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="auth-form__group">
        <label>Country of Residence</label>
        <Select
          value={country}
          onChange={handleCountryChange}
          options={countryOptions}
          placeholder="Select a country"
        />
      </div>
        {isLogin && (
          <div className="auth-form__group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        )}
        {!isLogin && (
          <>
            <div className="auth-form__group">
              <label htmlFor="branchOfService">Branch of Service (for veterans)</label>
              <input
                type="text"
                id="branchOfService"
                value={branchOfService}
                onChange={(e) => setBranchOfService(e.target.value)}
                required
              />
            </div>
            <div className="auth-form__group">
              <label htmlFor="rank">Rank (for veterans)</label>
              <input
                type="text"
                id="rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                required
              />
            </div>
            <div className="auth-form__group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="auth-form__group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <button type="submit" className="auth-form__button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <div className="auth-form__switch">
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <button className="auth-form__switch-button" onClick={handleSwitchMode}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button className="auth-form__switch-button" onClick={handleSwitchMode}>
              Login
            </button>
          </>
        )}
      </div>
      {isLogin && (
        <div className="auth-form__forgot-password">
          <button className="auth-form__forgot-password-button">Forgot Password</button>
        </div>
      )}
    </div>
    </>
  );
}

export default AuthForm;
