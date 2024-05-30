'use client'
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import EventList, { events } from '@/app/components/eventList';
import { Spinner } from '@/app/components/ClientLayout';
import { IoIosPin } from "react-icons/io";
import { IoTicketOutline, IoTime  } from 'react-icons/io5';  
import { useAuth, useUser } from '@clerk/clerk-react';


function EventDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();

  const [event, setEvent] = useState(null);
  const isSoldOut = event?.bookedUsers.length >= event?.numberOfSeats;
  const formattedDate = new Date(event?.date).toLocaleDateString();
  const [isRegistered, setIsRegistered] = useState(false);
  const [filter, setFilter] = useState({ time: null, location: null });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const port = process.env.NEXT_PUBLIC_PORT;

  useEffect(() => {
    fetch(`${apiUrl}:${port}/api/event/${id}`)
      .then(response => response.json())
      .then(data => {
        setEvent(data);
        // Check if the user is already registered for the event
        setIsRegistered(data.bookedUsers.includes(user.id));
      })
      .catch(() => router.push('/events'));
  }, [id, router, user.id]);

  if (!event) {
    return <Spinner />;
  }


    // Format the date and time for the box
    const formattedBoxDate = new Date(event.date).toLocaleDateString('en-GB', {
      weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    }).replace(/,/g, '');
  
  // Only date for the image
  const formattedImageDate = new Date(event.date).toISOString().split('T')[0];
  
  // Time formatting
  const formattedTime = event.time ? ` ${event.time}` : '';

  const handleRegister = async () => {
    if (!isSignedIn) {
      console.error('User is not authenticated');
      return;
    }
  
    try {
      const token = await getToken();
      const response = await fetch(`${apiUrl}:${port}/api/event/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ eventId: id }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server response error:', errorData);
        throw new Error(errorData.message || 'Failed to register for the event.');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data.message);
      setIsRegistered(true);
    } catch (error) {
      console.error('Error registering for event:', error.message);
    }
  };

  const handleUnregister = async () => {
    if (!isSignedIn) {
      console.error('User is not authenticated');
      return;
    }
  
    try {
      const token = await getToken();
      const response = await fetch(`${apiUrl}:${port}/api/event/removeBooking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ eventId: id }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server response error:', errorData);
        throw new Error(errorData.message || 'Failed to unregister from the event.');
      }
  
      const data = await response.json();
      console.log('Unregistration successful:', data.message);
      setIsRegistered(false); // Update isRegistered state
    } catch (error) {
      console.error('Error unregistering from event:', error.message);
    }
  };

return (
  <div className="relative w-full md:max-w-7xl mx-auto pt-4 ">
  <div className="relative w-full md:w-4/5 mx-auto h-auto mb-4 ">
    <Image
      src={event.imageUrl}
      alt={event.title}
      className="w-full h-100 object-cover rounded "
      width={500}
      height={300}
    />
 <div className="absolute top-2/4 bottom-0 left-0 right-0 text-white text-center p-4">
 <div className="flex items-center justify-center space-x-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
  <p className="text-base font-open-sans font-bold inline text-shad">{formattedImageDate}</p>
  <IoIosPin size="1.7em" />
        <p className="text-base font-open-sans font-bold inline">{event.location}</p>
      </div>
      <h1 className="text-2xl font-open-sans font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{event.title}</h1>
    </div>
  </div>
  <div className="flex flex-col-reverse md:flex-row w-full md:w-4/5 mx-auto items-start space-x-0 md:space-x-4">
    <div className="w-full md:w-1/2">
    <h3 className="text-2xl md:text-3xl font-montserrat text-gray-800 mb-6">{event.title}</h3>
      <p className="mt-2 text-gray-700">{event.description}</p>
    </div>
    <div className="w-full md:w-1/2 h-auto p-6 bg-gray-100 shadow-sm rounded-lg">
          <button
            className={`h-14 w-full mx-auto my-1 rounded flex items-center justify-center ${
              isSoldOut ? 'bg-red-300 text-gray-300 cursor-default' : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
            disabled={isSoldOut}
            onClick={isRegistered ? handleUnregister : handleRegister}
          >
            <IoTicketOutline size={36} className={`${isSoldOut ? 'text-gray-300' : 'text-white'} mr-2`} />
            <p className="text-center text-xl font-bold font-open-sans">
              {isSoldOut ? 'Sold Out' : isRegistered ? 'Unregister' : 'Register'}
            </p>
          </button>
          <p className="text-center text-gray-600 my-2 font-open-sans">
            Secure your spot now and join us for an unforgettable experience. Limited seats are available, so don't miss out on this opportunity!
          </p>
          <div className="flex items-center space-x-2">
            <div className="text-red-600">
              <IoTime />
            </div>
            <div className="text-neutral-600 font-open-sans">{formattedBoxDate}</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-red-600">
              <IoIosPin />
            </div>
            <div className="text-neutral-600 font-open-sans">{event.location}</div>
          </div>
        </div>
    </div>
    <hr className="border-t-2 border-slate-400/10 mt-32 mb-4" />
    <div className="p-2">
  <EventList filter={filter} />
</div>
  </div>
);
}



export default EventDetail;