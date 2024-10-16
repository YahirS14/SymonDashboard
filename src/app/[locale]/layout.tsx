import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import { RootLayoutProps } from '@/domain/types/types';
import { spaceGrotesk } from '../../../public/fonts/fonts';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Symon Dashboard',
  description: 'Your cripto dashboard',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  let messages;
  try {
    messages = (
      await import(`../../../public/messages/${locale}.json`)
    ).default;
  } catch (error) {
    console.error(
      `No se puedieron cargar los mensajes para locale: ${locale}`
    );
    error;
    messages = {};
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <title>SYMON</title>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
