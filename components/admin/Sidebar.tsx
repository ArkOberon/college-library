"use client";

import Image from 'next/image';
import { adminSideBarLinks } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { object } from 'zod';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { getInitials } from '@/lib/utils';
import { Session } from 'next-auth';

const Sidebar = ({ session }: {session: Session}) => {
  const pathname = usePathname()

  return (
    <div className='admin-sidebar'>
      <div>
        <div className='logo'>
          <Image 
            src="/favicon.ico"
            alt="logo"
            height={37}
            width={37}  
          />
          <h1>SmartBook</h1>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {
            adminSideBarLinks.map((link) => {
              const isSelected =
              (link.route !== "/admin" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

              return (
                <Link href={link.route} key={link.route}>
                  <div className={cn(
                    "link",
                    isSelected && "bg-primary-admin shadow-sm"
                  )}>
                    <div className="relative size-5">
                      <Image 
                        src={link.img}
                        alt="icon"
                        fill
                        className={`${isSelected ? 'brightness-0 invert' : ''} object-contain`}
                      />
                    </div>
                    <p className={cn(
                      isSelected ? "text-white" : "text-dark"
                    )}>
                      {link.text}
                    </p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div> 
      <div className="user">
        <Avatar className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'>              
          <AvatarFallback className='flex h-full w-full items-center justify-center bg-amber-100'>
            {
              getInitials(session?.user?.name || "IN")                  
            }
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-dark-200">{session?.user?.name}</p>
          <p className="text-xs text-light-500">{session?.user?.email}</p>
        </div>
      </div> 
    </div>
  )
}

export default Sidebar
