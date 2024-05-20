'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerFilter() {
  const [dates, setDates] = useState([null, null]);

  const onChange = (update) => {
    setDates(update);
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <DatePicker
        className="border p-2 rounded-md text-blue-500"
        selected={dates[0]}
        onChange={onChange}
        startDate={dates[0]}
        endDate={dates[1]}
        selectsRange
        isClearable
        placeholderText="Select Date or Range"
      />
    </div>
  );
}

export default DatePickerFilter;