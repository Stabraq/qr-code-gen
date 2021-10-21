import * as React from 'react';
export const InputField = ({
  name,
  type,
  handleChange,
  min,
  max,
  step,
  defaultValue,
  hideLabel,
  value,
}) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}
    >
      {!hideLabel && <label>{name}</label>}
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        min={min}
        max={max}
        step={step || 1}
        defaultValue={defaultValue}
        value={value}
      />
    </div>
  );
};
