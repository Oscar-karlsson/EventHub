'use client'
import React from 'react';
import { IoTicketOutline } from 'react-icons/io5';
import Link from 'next/link'; 



export const events = [
  {
    id: '1',
    title: 'New Year Celebration',
    date: '2022-12-31',
    time: '19:00',
    location: 'Central Park, New York',
    description: 'Join us to celebrate the New Year with live music, fireworks, and more!',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Music & Arts',
    seats: 300,
    registeredUsers: 300
  },
  {
    id: '2',
    title: 'Tech Conference 2023',
    date: '2023-01-01',
    time: '09:00',
    location: 'Convention Center, San Francisco',
    description: 'Kick off the new year with the latest in tech at our annual conference.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Technology',
    seats: 500,
    registeredUsers: 350
  },
  {
    id: '3',
    title: 'Food Festival',
    date: '2023-02-15',
    time: '11:00',
    location: 'Downtown, Los Angeles',
    description: 'Experience the best food from all over the world at our annual Food Festival.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Food & Drink',
    seats: 400,
    registeredUsers: 200
  },
  {
    id: '4',
    title: 'Summer Music Festival',
    date: '2023-06-20',
    time: '16:00',
    location: 'Beach Park, Miami',
    description: 'Join us for a day of live music and fun at our Summer Music Festival.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Music & Arts',
    seats: 600,
    registeredUsers: 400  
  },
  {
    id: '5',
    title: 'Comic-Con 2023',
    date: '2023-07-20',
    time: '10:00',
    location: 'San Diego Convention Center, San Diego',
    description: 'The largest comics and pop culture convention in the world.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Comics & Pop Culture',
    seats: 130000,
    registeredUsers: 65000
  },
  {
    id: '6',
    title: 'Lollapalooza 2023',
    date: '2023-07-28',
    time: '11:00',
    location: 'Grant Park, Chicago',
    description: 'A 4-day music festival featuring popular alternative rock, heavy metal, punk rock, hip hop bands and artists.',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
    category: 'Music',
    seats: 400000,
    registeredUsers: 200000
  },
];



function EventList() {
  return (
    <div className="flex flex-col items-center w-full">
      {events.map((event) => (
        <div key={event.id} className="w-full max-w-6xl my-2">
          <Link href={`/events/${event.id}`} passHref>
            <div className="cursor-pointer flex my-2 bg-gray-800 transition-colors duration-200 hover:bg-gray-800/90 rounded">
              <img alt="event" src={event.image} className="w-1/4 object-cover rounded-l" />
              <div className="w-3/4 p-4 flex justify-between items-center rounded-r">
                <div className="flex-grow">
                  <p className="text-indigo-500 text-md font-medium">{event.title}</p>
                  <p className="text-white text-xl font-medium mb-2">{event.date} at {event.time}</p>
                  <p className="text-gray-300 font-light">{event.location}</p>
                  <p className="text-sm text-gray-500">{event.description}</p>
                  <p className="text-sm text-gray-500">Category: {event.category}</p>
                </div>
                <div className={`${event.registeredUsers < event.seats ? 'hover:bg-slate-100/5 p-2 rounded-full' : ''}`}>
                  {event.registeredUsers < event.seats ? (
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
