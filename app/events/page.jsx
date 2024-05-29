'use client'
import React, { useState } from 'react';
import EventList from '../components/eventList';
import Filter from '../components/filter';
import DatePickerFilter from '../components/datePicker';


function EventPage() {
  const [dates, setDates] = useState([null, null]);
  const [filter, setFilter] = useState({ time: '', location: '' });
  const [selectedOption, setSelectedOption] = useState({ time: null, location: null });

  const timeOptions = [
    { value: 'ascending', label: 'Ascending' },
    { value: 'descending', label: 'Descending' }
  ];
  
  const locationOptions = [
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'reverse-alphabetical', label: 'Reverse Alphabetical' }
  ];

  const handleSort = (value, name) => {
    setSelectedOption(prevSelectedOption => ({ ...prevSelectedOption, [name]: { value: value, label: value } }));
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  const handleReset = () => {
    setDates([null, null]);
    setFilter({ time: '', location: '' });
    setSelectedOption({ time: null, location: null });
  };

  return (
    <div className="p-4 bg-bg-color min-h-screen">
      <div className="flex justify-center">
        <div className="inline-flex flex-col justify-center items-center bg-card-bg shadow p-4 rounded-lg">
          <div className="flex  gap-4">
            <Filter 
              timeOptions={timeOptions} 
              locationOptions={locationOptions} 
              onSort={handleSort} 
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <DatePickerFilter dates={dates} setDates={setDates} />
          </div>
          <button onClick={handleReset} className="bg-primary-button hover:bg-primary-button-hover text-default-text font-poppins py-2 px-4 rounded mt-4">
            Reset
          </button>
        </div>
      </div>
      <EventList dates={dates} filter={filter} />
    </div>
  );
}

export default EventPage;