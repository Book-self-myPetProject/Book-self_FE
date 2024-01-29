import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

