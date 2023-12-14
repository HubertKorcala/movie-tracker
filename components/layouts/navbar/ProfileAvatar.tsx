'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ProfileAvatar = ({
  user,
}: {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className=" cursor-pointer">
          <div>
            <Avatar className="w-9 h-9 max-lg:hidden">
              <AvatarImage
                src={user.image ?? `https://github.com/shadcn.png`}
              />
            </Avatar>
            <p className="lg:hidden text-sm text-light-900 font-bold ml-4 mt-8">
              My Account
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-light-900 p-3 text-dark-100">
          <DropdownMenuLabel className="text-md">
            {user.name ?? 'My Account'}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-primary hover:text-light-900 duration-200 rounded-sm cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-primary hover:text-light-900 rounded-sm cursor-pointer duration-200">
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="hover:bg-primary hover:text-light-900 rounded-sm cursor-pointer duration-200"
            onClick={() => {
              signOut();
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
