'use client'
import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

function Filter({ timeOptions, locationOptions, onSort, selectedOption, setSelectedOption }) {
  const handleSortChange = (selectedOption, { name }) => {
    setSelectedOption(prevSelectedOption => ({ ...prevSelectedOption, [name]: selectedOption }));
    onSort(selectedOption.value, name);
  };

 // Custom styles for react-select
 const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--select-control-bg)',
    borderColor: 'var(--select-control-border)',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--select-menu-bg)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--select-single-value)',
  }),
  option: (provided, state) => {
    const color = state.isDisabled
      ? 'var(--select-disabled-option)'
      : state.isSelected
      ? 'var(--select-selected-option)'
      : state.isFocused
      ? 'var(--select-focused-option)'
      : 'var(--select-option)';

    return {
      ...provided,
      backgroundColor: state.isSelected
        ? 'var(--select-selected-option-bg)'
        : state.isFocused
        ? 'var(--select-focused-option-bg)'
        : 'var(--select-option-bg)',
      color,
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...provided[':active'],
        backgroundColor: !state.isDisabled && (state.isSelected ? 'var(--select-selected-option-bg)' : 'var(--select-option-bg-light)'),
      },
    };
  },
  input: (provided) => ({
    ...provided,
    color: 'var(--select-input)',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--select-placeholder)',
  }),
};

  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-row space-x-4">
        <div>
          <label className="block text-sm font-medium text-default-text">Sort by time</label> 
          <Select 
            name="time"
            options={timeOptions}
            onChange={handleSortChange}
            value={selectedOption.time}
            styles={customStyles}
            className="mt-1 rounded-md shadow-sm w-32 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-default-text">Sort by location</label>
          <Select
            name="location"
            options={locationOptions}
            onChange={handleSortChange}
            value={selectedOption.location}
            styles={customStyles}
            className="mt-1 rounded-md shadow-sm w-32 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
