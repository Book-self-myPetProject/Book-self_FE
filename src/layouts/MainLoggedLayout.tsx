import React, { ReactNode } from 'react';
import { Footer } from '../components/Footer/Footer';
import { HeaderLogged } from '../components/HeaderLogged/HeaderLogged';

interface MainLoggedLayoutProps {
  children: ReactNode;
}

export const MainLoggedLayout: React.FC<MainLoggedLayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderLogged />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

