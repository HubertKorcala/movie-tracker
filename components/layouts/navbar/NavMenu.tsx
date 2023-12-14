'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const NAVIGATION_LIST = [
  {
    title: 'Movies',
    childs: [
      { title: 'Popular', href: '/movie' },
      { title: 'Top Rated', href: '/movie/top-rated' },
    ],
  },
  {
    title: 'TV Shows',
    childs: [
      { title: 'Popular', href: '/tv' },
      { title: 'Top Rated', href: '/tv/top-rated' },
    ],
  },
  {
    title: 'People',
    childs: [{ title: 'Popular People', href: '/person' }],
  },
  {
    title: 'Lists',
    childs: [
      { title: 'Rated Movies', href: '/movie/top-rated/:id' },
      { title: 'Rated TV Shows', href: '/tv/top-rated/:id' },
      { title: 'Watchlist Movies', href: '/movie/watchlist/:id' },
      { title: 'Watchlist TV Shows', href: '/tv/watchlist/:id' },
    ],
  },
];

const NavMenu = () => {
  return (
    <>
      {NAVIGATION_LIST.map((item) => (
        <NavigationMenu key={item.title} className="text-light-900">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="max-md:mb-3 font-bold">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="text-dark-100">
                <NavigationMenuList className="flex flex-col py-2 w-40 bg-light-850">
                  {item.childs?.map((child) => (
                    <Link href={child.href} key={child.title}>
                      <p className="hover:bg-light-800 w-40 cursor-pointer text-left p-2 pl-6 text-sm">
                        {child.title}
                      </p>
                    </Link>
                  ))}
                </NavigationMenuList>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </>
  );
};

export default NavMenu;
