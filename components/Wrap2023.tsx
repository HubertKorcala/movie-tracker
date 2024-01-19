import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Wrap2023 = () => {
  return (
    <section className="relative h-[300px] flex items-center bg-secondary bg-[url('/assets/images/wrap_background.webp')] w-full bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col gap-5 px-10 ">
        <div className="text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-br lg:text-6xl lg:leading-[65px] text-5xl font-bold text-gradient-to-r from-[#9dcba4] via-[#53b1dd]  to-[#298af5]">
          That's a<br />
          Wrap 2023
        </div>
        <div className="text-white text-xl">
          The best (and worst) of the year from TMBD.
        </div>
        <Link href="/2023" className="w-max">
          <Button className="text-white rounded-full font-semibold w-max py-2 px-4 border-2 border-white bg-transparent">
            Check it out
            <Image
              src="/assets/icons/arrow-thin-right-white.svg"
              alt="arrow right icon"
              width={20}
              height={20}
              className="ml-1"
            />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Wrap2023;
