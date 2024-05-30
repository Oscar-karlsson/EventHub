'use client';
import React, { useState, useEffect } from 'react';
import { IoTicketOutline } from 'react-icons/io5';
import Link from 'next/link'; 
import { PiMapPinLight } from "react-icons/pi";

function EventList({ dates, filter }) {
  const [events, setEvents] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const port = process.env.NEXT_PUBLIC_PORT;


  const formatDate = (dateString) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-GB', options).replace(/,/g, '');
  };

  useEffect(() => {
    fetch(`${apiUrl}:${port}/api/event`)
    .then(response => response.json())
    .then(data => {
      console.log('API data:', data); // Log the data for debugging
      if (!Array.isArray(data)) {
        throw new Error('API did not return an array');
      }
        // Filter out past events
        const currentDate = new Date();
        data = data.filter(event => new Date(event.date) >= currentDate);

        

        // Filter events by date range
        if (dates && dates[0] && !dates[1]) {
          data = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === dates[0].toDateString();
          });
        } else if (dates && dates[0] && dates[1]) {
          data = data.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= dates[0] && eventDate <= dates[1];
          });
        }

        // Sort by date if no filter is specified
        if (!filter.time && !filter.location) {
          data.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        // Sort by date if specified
        if (filter.time) {
          data.sort((a, b) => {
            if (filter.time === 'ascending') {
              return new Date(a.date) - new Date(b.date);
            } else if (filter.time === 'descending') {
              return new Date(b.date) - new Date(a.date);
            }
            return 0;
          });
        }

        // Sort by location independently when date sort is not specified
        if (!filter.time && filter.location) {
          data.sort((a, b) => {
            if (filter.location === 'alphabetical') {
              return a.location.localeCompare(b.location);
            } else if (filter.location === 'reverse-alphabetical') {
              return b.location.localeCompare(a.location);
            }
            return 0;
          });
        }

        // Sort by location after date sort when both are specified
        if (filter.time && filter.location) {
          data.sort((a, b) => {
            if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
              if (filter.location === 'alphabetical') {
                return a.location.localeCompare(b.location);
              } else if (filter.location === 'reverse-alphabetical') {
                return b.location.localeCompare(a.location);
              }
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
              <div className="flex items-center -mt-6">
                <p className="text-card-date font-bold font-open-sans h-6 overflow-hidden">{formatDate(event.date)}</p>
                <PiMapPinLight  size={20} className="mx-1 text-red-600" />
                <p className="text-card-date font-bold font-open-sans h-6 overflow-hidden">{event.location}</p>
              </div>
                <p className="text-card-title text-2xl font-bold font-open-sans mb-2 h-8 overflow-hidden">{event.title}</p>
                {/* <p className="text-card-location font-light h-6 overflow-hidden">{event.location}</p> */}
                <p className="text-sm text-card-text font-open-sans description-clamp mb-2">{event.description}</p>
                <p className="text-sm text-card-category font-open-sans h-6 overflow-hidden">Category: {event.category}</p>
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