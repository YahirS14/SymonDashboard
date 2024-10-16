import { useTranslations } from 'next-intl';
import ThemeSwitch from '../Theme/ThemeSwitch';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <h1>{t('tittle')}</h1>
      <ThemeSwitch />
    </>
  );
}
