'use client';
import { Inter } from 'next/font/google';
import './global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './assets/theme/themes';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';

const inter = Inter({ subsets: ['latin'] });
const clientSideEmotionCache = createEmotionCache();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <CacheProvider value={clientSideEmotionCache}>
            <CssBaseline />
            {children}
          </CacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
