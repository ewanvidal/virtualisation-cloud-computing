import React from 'react';

export default function Input({ type = 'text', value, onChange, placeholder, className = '' }) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border px-2 py-1 rounded ${className}`}
      />
    );
  }