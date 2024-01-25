import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CarouselCardProps = {
  image: string;
  title: string;
  link: string;
  date: string;
};

const CarouselCard = (props: CarouselCardProps) => {
  return (
    <div className="pl-5 w-max">
      <Link className="" href={`/movie/${props.link}`}>
        <Image
          src={props.image}
          width={150}
          height={225}
          alt=""
          className="rounded-lg"
        />
      </Link>
      <div className="leading-5 pt-[26px] px-[10px]">
        <Link
          className="text-base font-bold leading-5 hover:text-secondary"
          href={`/movie/${props.link}`}
        >
          {props.title}
        </Link>
        <p className="text-gray-400 leading-5">{props.date}</p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CarouselCard;
