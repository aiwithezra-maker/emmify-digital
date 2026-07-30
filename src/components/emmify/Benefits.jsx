import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Generate more qualified leads',
  'Never lose track of inquiries',
  'Automate repetitive tasks',
  'Improve local search visibility',
  'Increase customer reviews',
  'Save time and boost revenue'
];

export default function Benefits() {
  return (
    <section id="why" className="bg-[#0A0A0A] px-5 py-28 text-white md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="section-label text-white/70">Why choose us</p>
          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">Why Businesses Choose Emmify Digital</h2>
        </div>
        <div className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((x, i) => (
            <div key={x} className="group flex min-h-40 items-start gap-5 bg-[#0A0A0A] p-8 transition hover:bg-white/[0.06]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[#0A0A0A]">
                <Check size={16} />
              </span>
              <div>
                <span className="text-xs font-mono text-slate-600">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{x}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}