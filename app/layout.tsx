import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'هوش مصنوعی صبح دانش',
  description: 'دستیار هوشمند صبح دانش - همیشه آماده پاسخ به سوالات شما',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col">
        <header className="bg-white shadow-lg border-b-4 border-green-600">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center gap-6">
            <Image
              src="/logo.png"
              alt="لوگو هوش مصنوعی صبح دانش"
              width={100}
              height={100}
              priority
              className="drop-shadow-2xl"
            />
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                هوش مصنوعی صبح دانش
              </h1>
              <p className="text-lg text-gray-600 mt-1">دستیار هوشمند شما برای یادگیری و کشف</p>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
