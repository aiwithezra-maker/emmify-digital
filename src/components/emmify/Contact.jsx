import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import CtaButton from './CtaButton';
import { WHATSAPP_URL, EMAIL, WHATSAPP_NUMBER } from '@/lib/config';

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Contact</p>
        <h2 className="mt-7 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">Ready to Grow Your Business?</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Whether you need more qualified leads, better Google visibility or automated customer follow-ups, we're here to help.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={`mailto:${EMAIL}`} className="flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-black/15 bg-white px-6 font-medium transition hover:border-[#0A0A0A]">
            <Mail size={18} /> {EMAIL}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-black/15 bg-white px-6 font-medium transition hover:border-[#0A0A0A]">
            <MessageCircle size={18} className="text-[#25D366]" /> {WHATSAPP_NUMBER}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton>Book My FREE Audit</CtaButton>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-whatsapp">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}