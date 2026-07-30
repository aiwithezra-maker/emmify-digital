import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import CtaButton from './CtaButton';
import { WHATSAPP_URL } from '@/lib/config';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-44">
      <div className="data-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="reveal section-label">Local growth, engineered</p>
        <h1 className="reveal mt-7 text-5xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
          Turn More Local Searches Into Paying Customers
        </h1>
        <p className="reveal mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          We help businesses generate qualified leads, automate follow-ups, and optimize their Google Business Profile so they can attract more customers without increasing workload.
        </p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton>GET MY FREE BUSINESS AUDIT</CtaButton>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-whatsapp">
            Chat on WhatsApp <ArrowDownRight size={18} />
          </a>
        </div>
        <p className="reveal mt-12 text-sm font-medium text-slate-500">More Leads. Better Follow-Up. More Customers.</p>
      </div>
    </section>
  );
}