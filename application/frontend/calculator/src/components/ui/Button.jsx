import React from 'react';

export default function Button({ children, onClick, className = '', disabled }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded ${className} ${disabled ? 'opacity-50' : ''}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }