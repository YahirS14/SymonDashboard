import { useTranslations } from 'next-intl';
import HomePage from '../components/Home';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <HomePage />
    </>
  );
}
