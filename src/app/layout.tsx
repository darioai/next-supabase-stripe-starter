import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';

import { CookieBanner } from '@/components/cookie-banner';
import { Footer } from "@/components/footer";
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/utils/cn';
import { Analytics } from '@vercel/analytics/react';

import { AppBar } from './navigation';

import '@/styles/globals.css';

// MODIFIED: RootLayout in src/app/layout.tsx
export const dynamic = 'force-dynamic';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const montserratAlternates = Montserrat_Alternates({
  variable: '--font-montserrat-alternates',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'datahora',
  description: 'Tus datos, ahora. Tus informes, listos.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-[#F2F2F2] font-sans antialiased',
          montserrat.variable,
          montserratAlternates.variable,
        )}
      >
        <div className="m-auto flex min-h-screen max-w-[1440px] flex-col px-4 py-6">
          <div className="flex flex-1 flex-col rounded-3xl bg-white shadow-sm border border-neutral-300 pb-0">
            <AppBar />
            <main className="relative flex-1">
              <div className="relative h-full">{children}</div>
            </main>
            <Footer />
          </div>
        </div>
        <Toaster />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
