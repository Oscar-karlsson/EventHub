'use client'
import React from 'react';
import EventList from '../components/eventList';
import Filter from '../components/filter';
import DatePickerFilter from '../components/datePicker';

function EventPage() {
  return (
    <div className="p-4 bg-gray-500 min-h-screen">
      <DatePickerFilter />
      <Filter />
      <EventList />
    </div>
  );
}

export default EventPage;