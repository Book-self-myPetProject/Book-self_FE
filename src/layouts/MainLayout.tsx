import React, { ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

