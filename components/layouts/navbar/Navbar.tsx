'use client';

import React from 'react';
import Theme from '@/components/layouts/navbar/Theme';
import Link from 'next/link';
import NavMenu from './NavMenu';
import MobileNav from './MobileNav';

import { useSession } from 'next-auth/react';
import ProfileAvatar from './ProfileAvatar';

const AuthButton = () => {
  const { data: session } = useSession();
  const user = session?.user;
  if (user) {
    return <ProfileAvatar user={user} />;
  }
  return (
    <>
      <Link href="/signin" className="mr-2 max-lg:hidden">
        Login
      </Link>
      <Link href="/register" className="max-lg:hidden">
        Sign up
      </Link>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="z-50  bg-primary">
      <div className="container flex flex-row justify-between items-center gap-5 p-4 sm:px-12">
        <div className="flex">
          <Link href="/">
            <p className="text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r lg:text-3xl text-2xl font-extrabold text-gradient-to-r from-tertiary to-secondary">
              MOVIE TRACKER
            </p>
          </Link>
          <div className="max-lg:hidden lg:ml-5 flex">
            <NavMenu />
          </div>
        </div>
        <div className="flex gap-4 items-center text-sm text-light-900 font-bold">
          <div className="max-lg:hidden">
            <AuthButton />
          </div>
          <Theme />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
