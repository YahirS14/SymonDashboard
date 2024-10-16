import Link from 'next/link';
import ThemeSwitch from '../Theme/ThemeSwitch';
import '../styles/header.css';

import 'animate.css';
import { useTranslations } from 'next-intl';

function Header() {
  const t = useTranslations('Index');

  return (
    <>
      <header className="h-screen">
        <section className="flex flex-col justify-center">
          <div className="flex justify-between p-6 items-center bg-principalBrightColor dark:bg-principalDarkColor">
            <div className="animate__animated animate__fadeInLeft">
              <Link href="/">
                <h1 className="text-3xl">SYMON</h1>
              </Link>
            </div>

            <nav className="flex items-center gap-9 animate__animated animate__backInDown p-3">
              <Link href="/">Inicio</Link>
              <Link href="/">Nosostors</Link>
              <Link href="/">Contactanos</Link>
            </nav>

            <div className="flex items-center gap-4 animate__animated animate__fadeInRight">
              <ThemeSwitch />
              <Link href="/">Sign In</Link>
              <Link
                href="/"
                className="bg-secondDarkColor rounded p-2 text-darkFont bg-"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="indexBackground">
            <div className="animated-stars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="p-14 flex flex-col justify-center items-end h-screen text-principalBrightColor">
            <h1 className="text-right text-5xl">{t('tittle')}</h1>
            <p className="text-right mt-2">{t('slogan')}</p>
            <Link
              href="/"
              className="rounded p-2 self-end transition-all duration-1000 ease-in-out mt-2"
            >
              {t('button')}
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
