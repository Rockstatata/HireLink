import React from 'react';

const InputField = ({ label, id, name, value, onChange, placeholder, isRequired, className }) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        className="w-full px-4 py-3 text-base border border-neutral-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-background text-text-primary placeholder-text-secondary/60"
      />
    </div>
  );
};

export default InputField;