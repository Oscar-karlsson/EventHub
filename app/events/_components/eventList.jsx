'use client'
import React, { useEffect, useState } from 'react';
import { IoTicketOutline } from 'react-icons/io5';

export const events = [
  {
    title: 'New Year Celebration',
    date: '2022-12-31',
    time: '19:00',
    location: 'Central Park, New York',
    description: 'Join us to celebrate the New Year with live music, fireworks, and more!',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Music & Arts'
  },
  {
    title: 'Tech Conference 2023',
    date: '2023-01-01',
    time: '09:00',
    location: 'Convention Center, San Francisco',
    description: 'Kick off the new year with the latest in tech at our annual conference.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Technology'
  },
  // Add more events as needed
];

const sortEvents = (events, criteria) => {
  let sortedEvents = [...events];

  if (criteria.time) {
    sortedEvents.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return criteria.time === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  if (criteria.locationSort) {
    sortedEvents.sort((a, b) => {
      if (a.location < b.location) return criteria.locationSort === 'asc' ? -1 : 1;
      if (a.location > b.location) return criteria.locationSort === 'asc' ? 1 : -1;
      return 0;
    });
  }

  return sortedEvents;
};

const filterEventsByDate = (events, dateRange) => {
  if (!dateRange.startDate) return events;
  return events.filter(event => {
    const eventDate = new Date(event.date);
    if (dateRange.endDate) {
      return eventDate >= dateRange.startDate && eventDate <= dateRange.endDate;
    } else {
      return eventDate.toDateString() === dateRange.startDate.toDateString();
    }
  });
};

const filterEventsByLocation = (events, location) => {
  if (!location) return events;
  return events.filter(event => event.location === location);
};

function EventList({ sortCriteria, locationFilter, dateRange }) {
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    let updatedEvents = sortEvents(events, sortCriteria);
    updatedEvents = filterEventsByDate(updatedEvents, dateRange);
    updatedEvents = filterEventsByLocation(updatedEvents, locationFilter);
    setFilteredEvents(updatedEvents);
  }, [sortCriteria, locationFilter, dateRange]);

  return (
    <div>
      {filteredEvents.map((event, index) => (
        <div key={index} className="flex w-full justify-center my-4">
          <img alt="event" src={event.image} className="w-1/6 object-cover rounded-l" />
          <div className="w-1/2 p-4 bg-gray-800 flex justify-between items-center rounded-r">
            <div className="flex-grow">
              <p className="text-indigo-500 text-md font-medium">{event.title}</p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">{event.date} at {event.time}</p>
              <p className="text-gray-400 dark:text-gray-300 font-light text-md">{event.location}</p>
              <p className="text-sm text-gray-500 mt-4">{event.description}</p>
              <p className="text-sm text-gray-500 mt-1">Category: {event.category}</p>
            </div>
            <button
              className="p-2 w-16 h-16 flex items-center justify-center rounded-full hover:bg-slate-100/10 transition-colors duration-200"
              onClick={() => alert('Booking ticket...')}
            >
              <IoTicketOutline size={36} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
