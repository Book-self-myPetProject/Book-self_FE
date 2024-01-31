import React, { useState } from 'react';
import logo from '../../logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MainLayout } from '../../layouts/MainLayout';
import { Dialog } from '@headlessui/react';
import { SwipeCategories } from '../../components/SwiperCategories/SwiperCategories';

export const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
       <MainLayout>
       
    <div className="App">
    <header className="App-header">
      <SwipeCategories title='Categories' />

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
      </MainLayout>

    </>
  );
};
