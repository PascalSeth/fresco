'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { menuList } from '../data';
import { Button } from '@/components/ui/button';
import { MenuSheet } from './sheet/MenuSheet';

type Props = {};

function Navbar({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex overflow-x-hidden top-0 sticky w-full z-[999] bg-white items-center justify-between px-4 py-2'>
      <div className=' max-w-6xl mx-auto flex items-center w-full justify-between '>
      <div>
        <Image src="/logo.png" alt='logo' width={130} height={130} />
      </div>

      <div className='hidden md:flex items-center space-x-4 font-semibold'>
        {menuList && menuList.map(item => (
          <div key={item.id}>
            <a href={item.path} className='hover:text-gray-500'>
              {item.name}
            </a>
          </div>
        ))}
      </div>

      <div className='hidden md:flex  items-center space-x-3'>
        <Button className='bg-orange-500 hover:bg-orange-300  rounded-[12px] text-white w-16'>Login</Button>
        <Button className='bg-orange-500 hover:bg-orange-300 rounded-[12px] text-white w-16'>Sign Up</Button>
      </div>

      <div className='md:hidden'>
        {/* Mobile menu button */}
       <MenuSheet/>
      </div>

      {menuOpen && (
        <div className='absolute top-16 left-0 right-0 bg-white shadow-md md:hidden'>
          {menuList && menuList.map(item => (
            <div key={item.id} className='p-4 border-b'>
              <a href={item.path} className='hover:text-gray-500'>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}
   </div> </div>
  );
}

export default Navbar;
