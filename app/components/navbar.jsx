'use client';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import { CiLogin } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-900 text-white shadow-lg">
   <Link 
        href="/" 
        className="text-3xl font-bold cursor-pointer"
      >
        Event Hub
      </Link>
      <div>
        <SignedOut>
        <SignInButton mode="modal">
        <button className="flex items-center text-white px-6 py-2 rounded transition-colors duration-200 hover:text-gray-00">
              <CiLogin className="mr-2 text-2xl" />
              <span>Sign In</span>
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton className="ml-4 bg-white text-blue-900 px-6 py-2 rounded hover:bg-gray-200 transition-colors duration-200" afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;