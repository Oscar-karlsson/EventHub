'use client'
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { events } from '@/app/components/eventList';
import { Spinner } from '@/app/components/ClientLayout';
import { IoIosPin } from "react-icons/io";
import { IoTicketOutline, IoTime  } from 'react-icons/io5';  


function EventDetail() {
  const { id } = useParams();
  const router = useRouter();

  const event = events.find(event => event.id === id);

  const date = new Date(event.date);
  const formattedDate = `${date.toLocaleDateString('en-US', { weekday: 'short' })} ${date.toLocaleDateString('en-US', { day: '2-digit' })} ${date.toLocaleDateString('en-US', { month: 'short' })}`;

// Redirect to events page if the event is not found
useEffect(() => {
  if (!event) {
    router.push('/events');
  }
}, [event, router]);

if (!event) {
  return <Spinner />; // Use the Spinner component
}

return (
  <div className="relative w-full max-w-6xl mx-auto">
  <div className="relative w-4/5 mx-auto h-auto mb-4">
    <Image  
      src={event.image} 
      alt={event.title} 
      className="w-full h-80 object-cover"
      width={500}
      height={300}
    />
    <div className="absolute top-2/4 bottom-0 left-0 right-0 text-white text-center p-4 text-shadow">
      <div className="flex items-center justify-center space-x-2">
        <p className="text-sm inline">{event.date}</p>
        <IoIosPin />
        <p className="text-sm inline">{event.location}</p>
      </div>
      <h1 className="text-2xl font-bold">{event.title}</h1>
    </div>
  </div>
  <div className="flex w-4/5 mx-auto items-start">
    <div className="w-1/2">
      <p>{event.title}</p>
      <p className="mt-2 text-gray-700">{event.description}</p>
    </div>
    <div className="w-1/2 h-72 p-4 bg-white shadow-lg rounded-lg">
    <button className={`bg-red-500 hover:bg-red-600 h-14 w-11/12 mx-auto my-4 rounded flex items-center justify-center ${event.registeredUsers >= event.seats ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={event.registeredUsers >= event.seats}>
  <IoTicketOutline size={36} className="text-white mr-2" />
  <p className="text-white text-center text-2xl font-bold">Register</p>
</button>
      <p className="text-center text-gray-600 my-2">Secure your spot now and join us for an unforgettable experience. Limited seats are available, so don't miss out on this opportunity!</p>
      <div className="flex items-center space-x-2">
        <div className="text-red-600"><IoTime /></div>
        <div className="text-neutral-600">{formattedDate}</div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="text-red-600"><IoIosPin /></div>
        <div className="text-neutral-600">{event.location}</div>
      </div>
    </div>
  </div>
</div>
);
}




export default EventDetail;