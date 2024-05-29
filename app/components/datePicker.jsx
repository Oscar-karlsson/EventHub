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
          <label className="block text-sm font-medium text-default-text">Select Date or Range</label>
          <DatePicker
            className="custom-date-picker w-48"
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