import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <header className="bg-slate-900">
          <div className="mx-auto w-full max-w-xl lg:max-w-5xl py-2 px-4">
            <h1 className="text-3xl text-white">Quartr</h1>
          </div>
        </header>
        <main className="mx-auto w-full max-w-xl lg:max-w-5xl py-2 px-4 h-full flex flex-col justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
