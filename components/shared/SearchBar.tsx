'use client';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <div className="background-light800_darkgradient relative flex min-h-[46px] grow items-center gap-1 rounded-full px-4">
        <Input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          //   value={search}
          //   onChange={(e) => {
          //     setSearch(e.target.value);

          //     if (!isOpen) setIsOpen(true);
          //     if (e.target.value === '' && isOpen) setIsOpen(false);
          //   }}
          className="text-md no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />
        <Button
          type="submit"
          className="absolute h-[46px] top-0 right-0 rounded-full py-[10px] px-7 text-sm font-semibold text-white hover:text-primary bg-gradient-to-r from-tertiary to-secondary"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
