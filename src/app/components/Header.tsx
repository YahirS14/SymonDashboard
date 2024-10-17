'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

function Header() {
  const t = useTranslations('Index');

  const [imgSrc, setImgSrc] = useState('/img/header.png');

  useEffect(() => {
    const htmlElement = document.documentElement;

    const updateImageSrc = () => {
      const isDarkMode = htmlElement.classList.contains('dark');
      setImgSrc(
        isDarkMode ? '/img/header-dark.png' : '/img/header.png'
      );
    };

    // Initial check
    updateImageSrc();

    // Create a MutationObserver to watch for changes in the class attribute
    const observer = new MutationObserver(updateImageSrc);

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <header className='relative w-full flex justify-between items-center p-12'>
      <div className='text-left relative max-w-2xl p-'>
        <h1 className='text-6xl font-extrabold tracking-widest uppercase'>
          {t('title')}
        </h1>
        <h3 className='mt-2 text-3xl font-extrabold uppercase'>
          {t('description')}
        </h3>
        <p className='mt-4 max-w-md text-lg text-left'>
          {t('slogan')}
        </p>
        <button className='mt-6 px-6 py-3 bg-bunker-300 dark:bg-bunker-800 rounded-lg transition duration-1000 ease-in-out hover:bg-bunker-600 hover:text-bunker-100 dark:hover:bg-bunker-100 dark:hover:text-bunker-950 hover:scale-105 hover:shadow-lg'>
          {t('button')}
        </button>
      </div>
      <div className='w-[600px] flex justify-start'>
        <img src={imgSrc} alt='header' className='rotate-12' />
      </div>
    </header>
  );
}

export default Header;
