import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CtaButton from './CtaButton';

const logo = 'https://media.base44.com/images/public/user_6a593fb6a38556efe8bdacbd/4db75b594_ChatGPTImageJul9202602_11_09PM.png';

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Why Choose Us', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${scrolled ? 'border-b border-black/10 bg-white/90 backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10" aria-label="Main navigation">
        <a href="/#home" className="flex items-center gap-3" aria-label="Emmify Digital home">
          <img src={logo} alt="Emmify Digital" className="h-11 w-11 rounded-full object-cover" />
          <span className="text-lg font-bold tracking-[-0.04em]">emmify <span className="font-normal text-slate-500">digital</span></span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-medium text-slate-600 transition hover:text-[#0A0A0A]">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CtaButton>GET MY FREE BUSINESS AUDIT</CtaButton>
        </div>

        <button className="rounded-lg p-2 text-[#0A0A0A] lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex h-20 items-center justify-between px-5 md:px-10">
            <span className="text-lg font-bold">Menu</span>
            <button className="rounded-lg p-2" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button>
          </div>
          <ul className="flex flex-col px-5">
            {links.map((l) => (
              <li key={l.label} className="border-b border-black/10">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="p-5">
            <CtaButton className="w-full" onClick={() => setOpen(false)}>GET MY FREE BUSINESS AUDIT</CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}