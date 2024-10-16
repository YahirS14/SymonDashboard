import { useTranslations } from 'next-intl';
import ThemeSwitch from '../Theme/ThemeSwitch';
import Header from '../components/Header';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <Header />
    </>
  );
}
