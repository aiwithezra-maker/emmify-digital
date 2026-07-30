import React from 'react';
import { Search, Inbox, PanelsTopLeft, MessageCircle, CalendarCheck, TrendingUp } from 'lucide-react';

const steps = [
  ['Google Maps & Local Search', Search],
  ['Lead Capture', Inbox],
  ['CRM Integration', PanelsTopLeft],
  ['Automated Follow-Up', MessageCircle],
  ['Qualified Appointments', CalendarCheck],
  ['More Customers', TrendingUp]
];

export default function Process() {
  return (
    <section id="process" className="bg-[#F4F4F7] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="section-label">Process</p>
          <h2 className="section-title mt-7">A clear path from search to sale.</h2>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map(([name, Icon], i) => (
            <div key={name} className="card p-6 transition hover:-translate-y-2">
              <span className="mb-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A0A0A] text-white">
                <Icon size={20} />
              </span>
              <p className="text-xs font-mono text-slate-400">0{i + 1}</p>
              <h3 className="mt-2 font-semibold leading-snug">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}