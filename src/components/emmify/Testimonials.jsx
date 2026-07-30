import React from 'react';
import { Quote } from 'lucide-react';

const stats = [
  ['Qualified leads', 'More'],
  ['Response time', 'Minutes'],
  ['Follow-ups', 'Automated'],
  ['Local visibility', 'Improved']
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px] text-center">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title mt-7">Trusted by growing local businesses.</h2>
        <p className="mx-auto mt-6 max-w-xl text-slate-600">Case studies and client stories are on the way. Here's a preview of the impact we engineer.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <figure key={i} className="card relative p-8 text-left">
              <Quote className="text-[#25D366]" size={28} />
              <blockquote className="mt-6 text-slate-700">
                "Client testimonial coming soon — a real story from a business growing with Emmify Digital."
              </blockquote>
              <figcaption className="mt-6 border-t border-black/10 pt-5 text-sm">
                <span className="font-semibold">Client Name</span><br />
                <span className="text-slate-500">Business • Location</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-black/10 p-6">
              <p className="text-2xl font-bold tracking-[-0.04em]">{v}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}