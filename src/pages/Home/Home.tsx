import React, { useState } from 'react';
import logo from '../../logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HomeLayout } from '../../layouts/HomeLayout';
import { Dialog } from '@headlessui/react';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
       <HomeLayout>
       
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <button className="bg-blue-600 hover:bg-custom-peach-light text-white font-nunito py-2 px-4 rounded">
        Button
      </button>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    </div>
      </HomeLayout>

    </>
  );
};
