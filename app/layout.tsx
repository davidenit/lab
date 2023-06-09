'use client';
import { Inter } from 'next/font/google';
import './global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './assets/theme/themes';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });
const clientSideEmotionCache = createEmotionCache();

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <CacheProvider value={clientSideEmotionCache}>
              <CssBaseline />
              {children}
            </CacheProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
