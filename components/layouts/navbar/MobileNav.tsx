'use client';
import React from 'react';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import NavMenu from './NavMenu';

import { useSession } from 'next-auth/react';
import ProfileAvatar from './ProfileAvatar';

const MobileNav = () => {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="lg:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-primary border-none">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r text-2xl font-extrabold text-gradient-to-r from-tertiary to-secondary">
            Movie Tracker
          </span>
        </Link>
        <div className="mt-8">
          <SheetClose asChild>
            <NavMenu />
          </SheetClose>
          {session?.user ? (
            <SheetClose asChild>
              <ProfileAvatar user={session.user} />
            </SheetClose>
          ) : (
            <div className="flex flex-col gap-3 ml-4 mt-10">
              <SheetClose asChild>
                <Link href="/signin">
                  <span className=" text-sm text-light-900 font-bold">
                    Login
                  </span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/register">
                  <span className="text-sm text-light-900 font-bold">
                    Sign up
                  </span>
                </Link>
              </SheetClose>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
