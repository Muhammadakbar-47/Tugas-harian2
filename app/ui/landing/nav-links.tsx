
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid';

// ...
const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Product',
    href: '/product',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[40x] grow items-center justify-center gap-2 rounded-lg p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-2 ml-2',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}