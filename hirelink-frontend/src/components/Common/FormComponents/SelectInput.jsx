import React from 'react';

const SelectInput = ({ id, value, onChange, options, optgroup, className }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 text-base border border-neutral-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 bg-background text-text-primary ${className}`}
    >
      {optgroup ? (
        options.map((group, groupIndex) => (
          <optgroup key={groupIndex} label={group.label}>
            {group.options.map((option, optionIndex) => (
              <option key={optionIndex} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))
      ) : (
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))
      )}
    </select>
  );
};

export default SelectInput;