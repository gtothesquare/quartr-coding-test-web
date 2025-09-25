import '~/styles/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
            <h1 className="text-4xl text-white">
              <Link href={'/'}>Quartr</Link>
            </h1>
          </div>
        </header>
        <main className="mx-auto w-full max-w-xl lg:max-w-5xl py-2 px-4 h-full flex flex-col justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
