import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">EventHub</h3>
            <p className="mt-2">Your go-to platform for events</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <ul className="list-reset inline-block">
              <li className="md:inline-block mt-2 md:mt-0 md:ml-6">
                <a href="/#" className="text-blue-200 hover:text-white">About</a>
              </li>
              <li className="md:inline-block mt-2 md:mt-0 md:ml-6">
                <a href="/#" className="text-blue-200 hover:text-white">Contact</a>
              </li>
              <li className="md:inline-block mt-2 md:mt-0 md:ml-6">
                <a href="/#" className="text-blue-200 hover:text-white">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;