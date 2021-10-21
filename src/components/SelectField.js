import * as React from 'react';
export const SelectField = ({ name, options, defaultValue, handleChange }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}
    >
      <label>{name}</label>
      <select name={name} defaultValue={defaultValue} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
