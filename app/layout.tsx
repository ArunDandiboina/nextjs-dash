import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://nextjs-dash-nine-iota.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>  
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A brief description of the page content." />
        <meta name="keywords" content="Next.js, Dashboard, React, Web Development" />
        <meta property="og:title" content="Next.js Dashboard" />
        <meta property="og:description" content="First Next.js Project" />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:url" content="https://nextjs-dash-nine-iota.vercel.app/" />
        <title>Next.js Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
