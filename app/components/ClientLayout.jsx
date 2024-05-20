'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@clerk/nextjs';
import Navbar from './navbar';
import Footer from './footer';
import ClipLoader from 'react-spinners/ClipLoader';

export function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader size={50} color={"#3b82f6"} />
    </div>
  );
}

export default function ClientLayout({ children }) {
  const { isLoaded } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  return loading ? <Spinner /> : (
<div className="flex flex-col min-h-screen justify-between">
      <header>
        <Navbar />
      </header>
      <main className="mb-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
