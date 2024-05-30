'use client'
import Link from 'next/link';
import { useAuth, SignUpButton } from '@clerk/nextjs';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="relative  text-white text-center h-96 flex items-center justify-center">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="transition duration-300 ease-in-out delay-150 absolute bottom-0 left-0 right-0">
        <path fill="#dbeafe" fill-opacity="1" d="M0,60L80,58.3C160,57,320,53,480,56.7C640,60,800,70,960,71.7C1120,73,1280,67,1440,53.3C1600,40,1760,20,1920,10C2080,0,2240,0,2400,15C2560,30,2720,60,2880,66.7C3040,73,3200,57,3360,43.3C3520,30,3680,20,3840,25C4000,30,4160,50,4320,51.7C4480,53,4640,37,4800,30C4960,23,5120,27,5280,26.7C5440,27,5600,23,5760,20C5920,17,6080,13,6240,11.7C6400,10,6560,10,6720,21.7C6880,33,7040,57,7200,63.3C7360,70,7520,60,7680,58.3C7840,57,8000,63,8160,65C8320,67,8480,63,8640,65C8800,67,8960,73,9120,66.7C9280,60,9440,40,9600,26.7C9760,13,9920,7,10080,10C10240,13,10400,27,10560,26.7C10720,27,10880,13,11040,13.3C11200,13,11360,27,11440,33.3L11520,40L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
      </svg>
</header>
  );
};

export default Header;