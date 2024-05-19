'use client';
import React, { useState } from 'react';
import EventList from './_components/EventList';
import { events } from './_components/EventList';
import DatePickerFilter from './_components/DatePicker';
import Filter from './_components/Filter';

function EventPage() {
  const [sortCriteria, setSortCriteria] = useState({ time: '', locationSort: '' });
  const [locationFilter, setLocationFilter] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [events, setEvents] = useState([]);


  const handleSort = (value, name) => {
    setSortCriteria(prev => ({ ...prev, [name]: value }));
  };

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
  };

  const handleDateFilter = (dateRange) => {
    setDateRange(dateRange);
  };

  // Extract unique locations from events
  const uniqueLocations = [...new Set(events.map(event => event.location))];

  const timeOptions = [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' }
  ];

  const locationOptions = uniqueLocations.map(location => ({ value: location, label: location }));

  return (
    <div className="p-4 bg-gray-500 min-h-screen">
      <DatePickerFilter onDateFilter={handleDateFilter} />
      <Filter
        timeOptions={timeOptions}
        locationOptions={locationOptions}
        onSort={handleSort}
        onLocationFilter={handleLocationFilter}
      />
      <EventList
        sortCriteria={sortCriteria}
        locationFilter={locationFilter}
        dateRange={dateRange}
      />
    </div>
  );
}

export default EventPage;
