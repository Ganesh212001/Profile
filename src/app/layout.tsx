// import icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.css'

// import bootstrap 
import 'bootstrap/dist/css/bootstrap.css'

// import glightbox
import 'glightbox/dist/css/glightbox.css'

import type { Metadata } from "next";
import {Raleway} from 'next/font/google'
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';

const raleway = Raleway({subsets:['latin']});

export const metadata: Metadata = {
  title: "Personal Pofile Website",
  description: "Explore Ganesh Mahajan's portfolio showcasing MERN stack web development, video editing, and creative projects. Discover innovative solutions today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
        <BackToTopBtn />
      </body>
    </html>
  );
}
