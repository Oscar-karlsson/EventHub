'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerFilter({ dates, setDates }) {
  const onChange = (update) => {
    setDates(update);
  };

  return (
    <div className="flex justify-center my-4">
      <div className="flex flex-row space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-900">Select Date or Range</label>
          <DatePicker
            className="mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2 text-blue-500"
            selected={dates[0]}
            onChange={onChange}
            startDate={dates[0]}
            endDate={dates[1]}
            selectsRange
            isClearable
            placeholderText="Select Date or Range"
          />
        </div>
      </div>
    </div>
  );
}


export default DatePickerFilter;