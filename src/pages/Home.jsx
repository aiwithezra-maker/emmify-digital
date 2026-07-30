import React from 'react';
import Navbar from '@/components/emmify/Navbar';
import Hero from '@/components/emmify/Hero';
import Benefits from '@/components/emmify/Benefits';
import Services from '@/components/emmify/Services';
import Process from '@/components/emmify/Process';
import Testimonials from '@/components/emmify/Testimonials';
import Faq from '@/components/emmify/Faq';
import Contact from '@/components/emmify/Contact';
import Footer from '@/components/emmify/Footer';
import MobileCta from '@/components/emmify/MobileCta';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <MobileCta />
    </main>
  );
}