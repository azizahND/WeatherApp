import React from 'react';

const Input = ({ value, onChange }) => {
  return (
    <div style={{ maxWidth: '300px', marginBottom: '1rem' }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Masukkan nama kota"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />
    </div>
  );
};

export default Input;
