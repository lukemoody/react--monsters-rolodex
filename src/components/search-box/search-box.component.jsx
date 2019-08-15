import React from 'react';
import './search-box.style.css';

// This is a functional component. doesn't have access to state,
// constructor or life cycle methods or internal state
// A functional component jus tgets props and returns html

export const SearchBox = ({ placeholder, handleChange }) => (
  <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
);
