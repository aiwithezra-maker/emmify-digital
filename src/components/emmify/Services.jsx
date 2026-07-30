import React from 'react';
import { Radar, Workflow, MapPin } from 'lucide-react';

const services = [
  { icon: Radar, n: '01', title: 'Lead Generation', text: 'Build a reliable pipeline of people ready to buy.', items: ['Google Maps prospecting', 'Local SEO', 'Lead qualification', 'Sales-ready leads'] },
  { icon: Workflow, n: '02', title: 'CRM Integration & Automation', text: 'Turn every inquiry into a structured next step.', items: ['WhatsApp Business automation', 'CRM setup', 'Automated follow-ups', 'Lead tracking dashboards'] },
  { icon: MapPin, n: '03', title: 'GBP Optimization', text: 'Own more attention when local customers search.', items: ['Google Business Profile optimization', 'Review generation systems', 'Local ranking improvements', 'Profile management'] }
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 max-w-3xl">
          <p className="section-label">Services</p>
          <h2 className="section-title mt-7">Three systems.<br />One growth engine.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card group p-8 md:p-10">
              <div className="flex items-start justify-between">
                <s.icon size={34} strokeWidth={1.5} className="text-[#0A0A0A]" />
                <span className="text-xs font-mono text-slate-400">{s.n}</span>
              </div>
              <h3 className="mt-16 text-2xl font-bold tracking-[-0.04em]">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.text}</p>
              <ul className="mt-8 space-y-3">
                {s.items.map((x) => (
                  <li key={x} className="flex gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#25D366]" />{x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}