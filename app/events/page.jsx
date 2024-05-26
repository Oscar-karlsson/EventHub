'use client'
import React, { useState } from 'react';
import EventList from '../components/eventList';
import Filter from '../components/filter';
import DatePickerFilter from '../components/datePicker';


function EventPage() {
  const [dates, setDates] = useState([null, null]);

  return (
    <div className="p-4 bg-bg-color min-h-screen">
      <div className="flex justify-center">
        <div className="inline-flex justify-center items-center gap-4 bg-white shadow p-4 rounded-lg">
          <Filter />
          <DatePickerFilter dates={dates} setDates={setDates} />
        </div>
      </div>
      <EventList dates={dates} />
    </div>
  );
}

export default EventPage;