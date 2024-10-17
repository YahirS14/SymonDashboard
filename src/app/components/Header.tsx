'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';

import 'animate.css';

function Header() {
  const t = useTranslations('Index');
  const [theme, setTheme] = useState('light');
  const [imageSrc, setImageSrc] = useState('/img/header.png');

  useEffect(() => {
    const html = document.documentElement;

    const updateImageSrc = () => {
      const isDarkMode = html.classList.contains('dark');
      setImageSrc(isDarkMode ? '/img/header-dark.png' : '/img/header.png');
    };
    updateImageSrc();

    const observer = new MutationObserver(updateImageSrc);

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const memoizedImageSrc = useMemo(() => imageSrc, [imageSrc]);

  return (
    <header className="relative w-full flex justify-between items-center p-12">
      <div className="text-left relative max-w-2xl animate__animated animate__zoomIn">
        <h1 className="text-6xl font-extrabold tracking-widest uppercase">
          {t('title')}
        </h1>
        <h3 className="mt-2 text-3xl font-extrabold uppercase">
          {t('description')}
        </h3>
        <p className="mt-4 max-w-md text-lg text-left">{t('slogan')}</p>
        <button className="mt-6 px-6 py-3 bg-bunker-300 dark:bg-bunker-800 rounded-lg transition duration-1000 ease-in-out hover:bg-bunker-600 hover:text-bunker-100 dark:hover:bg-bunker-100 dark:hover:text-bunker-950 hover:scale-105 hover:shadow-lg">
          {t('button')}
        </button>
      </div>
      <div className="image-container w-[600px] flex justify-start animate__animated animate__zoomInRight animate__delay-1s animate__slow">
        <img
          src={memoizedImageSrc}
          alt="header"
          className="rotate-12"
          loading="lazy"
        />
      </div>
    </header>
  );
}

export default Header;
