'use client'
import React, { useState, useEffect } from 'react';
import { IoTicketOutline } from 'react-icons/io5';
import Link from 'next/link'; 




function EventList({ dates }) {
  const [events, setEvents] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const port = process.env.NEXT_PUBLIC_PORT;

  useEffect(() => {
    fetch(`${apiUrl}:${port}/api/event`)
      .then(response => response.json())
      .then(data => {
        // If a single date is selected, filter the events for that date
        if (dates[0] && !dates[1]) {
          data = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === dates[0].toDateString();
          });
        }
        // If a date range is selected, filter the events for that range
        else if (dates[0] && dates[1]) {
          data = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= dates[0] && eventDate <= dates[1];
          });
        }
        setEvents(data);
      });
  }, [dates]);


  return (
    <div className="flex flex-col items-center w-full">
      {events.map((event) => (
        <div key={event.id} className="w-full max-w-6xl my-2">
          <Link href={`/events/${event.id}`} passHref>
          <div className="cursor-pointer flex my-2 bg-gray-800 transition-colors duration-200 hover:bg-gray-800/90 rounded">
  <div className="w-1/4">
    <img alt="event" src={event.imageUrl} className="object-cover h-48 w-full rounded-l" />
  </div>
  <div className="w-3/4 p-4 flex justify-between items-center rounded-r">
                <div className="flex-grow">
          <p className="text-indigo-500 text-md font-medium h-8 overflow-hidden">{event.title}</p>
  <p className="text-white text-xl font-medium mb-2 h-6 overflow-hidden">{event.date}</p>
  <p className="text-gray-300 font-light h-6 overflow-hidden">{event.location}</p>
  <p className="text-sm text-gray-500 description-clamp">{event.description}</p>
  <p className="text-sm text-gray-500 h-6 overflow-hidden">Category: {event.category}</p>
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
