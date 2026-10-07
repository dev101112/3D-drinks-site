import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Diet Soda | Pure Zero Refreshment',
  description: 'Experience the crisp, clean taste of Diet Soda. Zero sugar, zero compromise.',
  openGraph: {
    title: 'Diet Soda | Pure Zero Refreshment',
    description: 'Experience the crisp, clean taste of Diet Soda. Zero sugar, zero compromise.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diet Soda | Pure Zero Refreshment',
    description: 'Experience the crisp, clean taste of Diet Soda. Zero sugar, zero compromise.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
