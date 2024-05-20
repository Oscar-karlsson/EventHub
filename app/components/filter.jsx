'use client'
import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

const Filter = ({ timeOptions, locationOptions, onSort, onLocationFilter }) => {

  const handleSortChange = (selectedOption, { name }) => {
    onSort(selectedOption.value, name);
  };

  const handleLocationChange = (selectedOption) => {
    onLocationFilter(selectedOption.value);
  };

 // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937', // Tailwind bg-gray-800
      borderColor: '#4b5563', // Tailwind border-gray-600
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1f2937', // Tailwind bg-gray-800
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#f9fafb', // Tailwind text-gray-50
    }),
    option: (provided, state) => {
      const color = state.isDisabled
        ? '#ccc'
        : state.isSelected
        ? '#f9fafb'
        : state.isFocused
        ? '#d1d5db'
        : '#f9fafb'; // Tailwind text colors

      return {
        ...provided,
        backgroundColor: state.isSelected
          ? '#4b5563' // Tailwind bg-gray-700
          : state.isFocused
          ? '#374151' // Tailwind bg-gray-600
          : '#1f2937', // Tailwind bg-gray-800
        color,
        cursor: state.isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...provided[':active'],
          backgroundColor: !state.isDisabled && (state.isSelected ? '#4b5563' : chroma('#1f2937').alpha(0.3).css()),
        },
      };
    },
    input: (provided) => ({
      ...provided,
      color: '#f9fafb', // Tailwind text-gray-50
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9ca3af', // Tailwind text-gray-400
    }),
  };

  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-row space-x-4 bg-white shadow p-4 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-900">Sort by Times</label> 
          <Select 
            name="time"
            options={timeOptions}
            onChange={handleSortChange}
            styles={customStyles}
            className="mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Sort by Location</label>
          <Select
            name="location"
            options={locationOptions}
            onChange={handleSortChange}
            styles={customStyles}
            className="mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Filter by Location</label>
          <Select
            options={locationOptions}
            onChange={handleLocationChange}
            styles={customStyles} 
            className="mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
