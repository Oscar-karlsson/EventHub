'use client'
import React, { useState, useEffect } from 'react';
import { IoTicketOutline } from 'react-icons/io5';
import Link from 'next/link'; 




function EventList({ dates, filter }) {
  const [events, setEvents] = useState([]);


  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const port = process.env.NEXT_PUBLIC_PORT;



  useEffect(() => {
    fetch(`${apiUrl}:${port}/api/event`)
      .then(response => response.json())
      .then(data => {
        // Filter events by date range
        if (dates[0] && !dates[1]) {
          data = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === dates[0].toDateString();
          });
        } else if (dates[0] && dates[1]) {
          data = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= dates[0] && eventDate <= dates[1];
          });
        }

        // Sort events by date first
        if (filter.time === 'ascending') {
          data.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (filter.time === 'descending') {
          data.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        // Sort events by location within each date group
        if (filter.location === 'alphabetical') {
          data.sort((a, b) => {
            if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
              return a.location.localeCompare(b.location);
            }
            return 0;
          });
        } else if (filter.location === 'reverse-alphabetical') {
          data.sort((a, b) => {
            if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
              return b.location.localeCompare(a.location);
            }
            return 0;
          });
        }

        setEvents(data);
      });
  }, [dates, filter]);



  return (
    <div className="flex flex-col items-center w-full">
      {events.map((event) => (
        <div key={event.id} className="w-full max-w-6xl my-2">
          <Link href={`/events/${event.id}`} passHref>
          <div className="cursor-pointer flex my-2 bg-card-bg transition-colors duration-200 hover:bg-card-hover-bg rounded">
  <div className="w-1/4">
    <img alt="event" src={event.imageUrl} className="object-cover h-48 w-full rounded-l" />
  </div>
  <div className="w-3/4 p-4 flex justify-between items-center rounded-r">
                <div className="flex-grow">
          <p className="text-card-title text-md font-medium h-8 overflow-hidden">{event.title}</p>
  <p className="text-card-date text-xl font-medium mb-2 h-6 overflow-hidden">{event.date}</p>
  <p className="text-card-location font-light h-6 overflow-hidden">{event.location}</p>
  <p className="text-sm text-card-text description-clamp">{event.description}</p>
  <p className="text-sm text-card-category h-6 overflow-hidden">Category: {event.category}</p>
                </div>
                <div className={`${event.bookedUsers?.length < event.numberOfSeats ? 'hover:bg-slate-100/5 p-2 rounded-full' : ''}`}>
  {event.bookedUsers?.length < event.numberOfSeats ? (
    <IoTicketOutline size={36} className="text-white" />
  ) : (
    <div style={{ width: '36px', height: '36px' }} />
  )}
</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default EventList;
