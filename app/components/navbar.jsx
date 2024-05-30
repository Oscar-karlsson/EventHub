'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton, useUser, useClerk } from '@clerk/nextjs';


const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const isActive = (path) => pathname === path; // Adjust function to check the current pathname

  const handleEventsClick = (e) => {
    if (!user) {
      e.preventDefault();
      // Show sign in modal
      openSignIn({ redirectUrl: '/events' });
    }
  };
  

  return (
    
    <nav className="flex items-center justify-between p-6 bg-navbar-bg text-white ">
      <Link href="/" passHref>
  <div className="text-3xl text-logo-text font-bold font-chella cursor-pointer">
    Event Hub
  </div>
</Link>
<div className="flex items-center gap-4">
<Link href="/" passHref>
          <div onClick={handleEventsClick} className={`text-xl font-bold font-poppins cursor-pointer nav-link hover:text-hover-link ${isActive('/') ? 'nav-link-active' : ''}`}>
            Home
          </div>
        </Link>
        <Link href="/events" passHref>
          <div onClick={handleEventsClick} className={`text-xl font-bold font-poppins cursor-pointer nav-link hover:text-hover-link ${isActive('/events') ? 'nav-link-active' : ''}`}>
            Events
          </div>
        </Link>
        <Link href="#" passHref>
        <div className={`text-xl font-bold font-poppins cursor-pointer nav-link hover:text-hover-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
            About
          </div>
          </Link>
      </div>
      <div className="flex items-center" style={{ minWidth: '200px' }}>
        <SignedOut>
          <div className="flex items-center">
            <SignUpButton mode="modal">
              <div className="flex items-center justify-center h-10 px-4 bg-primary-button text-default-text rounded-l hover:bg-primary-button-hover cursor-pointer transition-colors duration-200">
                Sign Up
              </div>
            </SignUpButton>
            <SignInButton mode="modal">
              <div className="flex items-center justify-center h-10 px-4 bg-secondary-button text-default-text rounded-r hover:bg-secondary-button-hover cursor-pointer transition-colors duration-200">
                Login
              </div>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center justify-center h-10 px-4  text-blue-900 rounded  transition-colors duration-200" style={{ minWidth: '200px' }}>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;