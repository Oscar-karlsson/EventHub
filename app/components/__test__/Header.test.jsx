import '@testing-library/jest-dom'

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';
import * as Clerk from '@clerk/nextjs';

// Full mock of Clerk dependencies
jest.mock('@clerk/nextjs', () => {
    const originalModule = jest.requireActual('@clerk/nextjs');
    return {
      __esModule: true,
      ...originalModule,
      useAuth: jest.fn(),
      ClerkProvider: ({ children }) => <div>{children}</div>,  // Mock ClerkProvider
      SignUpButton: ({ children }) => <button>{children}</button>  // Mock SignUpButton as a simple button
    };
  });
  
  describe('Header Component', () => {
    beforeEach(() => {
      // Setup default values for useAuth mock
      Clerk.useAuth.mockReturnValue({ isSignedIn: false });
    });
  
    it('renders the title and description', () => {
      render(<Header />);
      expect(screen.getByText('Welcome to EventHub!')).toBeInTheDocument();
      expect(screen.getByText('Discover and book exciting events near you.')).toBeInTheDocument();
    });
  
    it('has the correct background image', () => {
      render(<Header />);
      const bgImage = screen.getByAltText('Background');
      expect(bgImage).toHaveAttribute('src', 'palm-bg.jpg');
    });
  
    it('displays the Register button when not signed in', () => {
      Clerk.useAuth.mockReturnValue({ isSignedIn: false });
      render(<Header />);
      expect(screen.getByText('Register')).toBeInTheDocument();
    });
  });