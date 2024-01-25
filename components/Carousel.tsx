'use client';
import React, { useState, useRef, useEffect } from 'react';

type CarouselProps = {
  children: React.ReactNode;
  backgroundImg?: boolean;
};

const Carousel = ({ children, backgroundImg }: CarouselProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      setIsScrolled(scrollLeft >= 30);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', checkScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <section
      className={`${
        backgroundImg
          ? `bg-[url('/assets/images/carousel-bg.svg')] bg-carousel`
          : ''
      } `}
    >
      <div className="">
        <p className="px-[40px] pt-[30px] text-xl font-bold">Trending</p>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className={`grid grid-flow-col pt-5 pb-14 pl-5 overflow-x-auto after:transition-opacity after:ease-linear after:duration-300 after:content-[''] after:w-[60px] after:h-full after:absolute after:top-0 after:right-0 after:bg-gradient-to-r after:from-[#fff0] after:to-[#fff] after:will-change-[opacity] after:pointer-events-none ${
            isScrolled ? `after:opacity-0` : `after:opacity-100`
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
