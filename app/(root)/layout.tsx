import Navbar from '@/components/layouts/navbar/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col">
          <div className="mx-auto w-full max-w-[1300px]">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
