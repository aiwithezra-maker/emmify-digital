import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  ['What is a free business audit?', 'We review your lead generation, follow-up process, and Google Business Profile to identify quick wins and a clear growth plan.'],
  ['How soon will you contact me?', 'We reach out on WhatsApp within 24 hours of your request.'],
  ['Do I need a website?', 'No. Many of our clients grow through Google Business Profile and WhatsApp automation alone.'],
  ['Which areas do you serve?', 'We work with local businesses across multiple regions — ask us about yours.'],
  ["What happens after the audit?", "You get a clear, prioritized action plan. If we're a fit, we can implement it for you."]
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#F4F4F7] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label">FAQ</p>
          <h2 className="section-title mt-7">Questions, answered.</h2>
          <p className="mt-6 text-slate-600">Everything you need to know before booking your free audit.</p>
        </div>
        <div className="lg:col-span-7">
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map(([q, a], i) => (
              <div key={q}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-lg font-semibold">{q}</span>
                  {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {open === i && <p className="pb-6 text-slate-600">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}