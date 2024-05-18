'use client'
import Link from 'next/link';
import { useAuth, SignInButton } from '@clerk/nextjs';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="relative bg-blue-600 text-white text-center h-96 flex items-center justify-center">
      <img
        src="https://themewagon.github.io/Evento/images/demo/bg-slide-01.jpg" // Replace with the path to your background image
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative z-10">
      <h1 className="text-5xl font-bold mb-4 text-white ">Welcome to EventHub!</h1>
<p className="text-2xl mb-6 text-white ">Discover and book exciting events near you.</p>
        
{isSignedIn ? (
  <Link 
    href="/events"
    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  >
    Go to Events
  </Link>
) : (
  <SignInButton 
    mode='modal' 
    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" 
  />
)}
      </div>
</header>
  );
};

export default Header;