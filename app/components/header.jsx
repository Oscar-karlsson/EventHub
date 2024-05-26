'use client'
import Link from 'next/link';
import { useAuth, SignUpButton } from '@clerk/nextjs';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="relative bg-blue-600 text-white text-center h-96 flex items-center justify-center">
      <img
        src="palm-bg.jpg" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="relative z-10">
      <h1 className="text-7xl font-bold mb-4 text-white font-chella">Welcome to EventHub!</h1>
      <p className="text-3xl mb-6 text-white font-open-sans">Discover and book exciting events near you.</p>
        
      {isSignedIn ? (
          <Link href="/events" passHref>
            <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-button hover:bg-primary-button-hover transition duration-200 ease-in-out">
              Go to Events
            </div>
          </Link>
        ) : (
          <SignUpButton 
            mode='modal' 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-button hover:bg-primary-button-hover transition duration-200 ease-in-out" 
          >
            Register
          </SignUpButton>
        )}
      </div>
</header>
  );
};

export default Header;