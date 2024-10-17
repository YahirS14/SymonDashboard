import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch';

function Nav() {
  return (
    <section className='flex flex-col justify-center sticky top-0'>
      <div className='flex justify-between p-6 items-center bg-principalBrightColor dark:bg-principalDarkColor'>
        <div className='animate__animated animate__fadeInLeft'>
          <Link href='/'>
            <h1 className='text-3xl'>SYVAL</h1>
          </Link>
        </div>

        <nav className='flex items-center gap-9 animate__animated animate__backInDown p-3'>
          <Link href='/'>Inicio</Link>
          <Link href='/'>Nosostors</Link>
          <Link href='/'>Contactanos</Link>
        </nav>

        <div className='flex items-center gap-4 animate__animated animate__fadeInRight'>
          <ThemeSwitch />
          <Link href='/'>Sign In</Link>
          <Link
            href='/'
            className='bg-bunker-300 dark:bg-bunker-800 hover:bg-bunker-200 dark:hover:bg-bunker-900 rounded p-2'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Nav;
