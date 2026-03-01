import type { Metadata } from 'next';
import { Montserrat, Playfair_Display, Cinzel_Decorative } from 'next/font/google';
import CustomCursor from '../components/CustomCursor';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-playfair' });
const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-cinzel' });

export const metadata: Metadata = {
  title: 'Bhakthan Designs',
  description: 'Bridging ancient wisdom with modern design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${cinzel.variable} scroll-smooth dark`}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round|Material+Icons" rel="stylesheet" />
      </head>
      <body className="font-sans bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 transition-colors duration-300 antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
