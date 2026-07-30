import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, EMAIL, WHATSAPP_NUMBER } from '@/lib/config';

const logo = 'https://media.base44.com/images/public/user_6a593fb6a38556efe8bdacbd/4db75b594_ChatGPTImageJul9202602_11_09PM.png';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-5 pb-28 pt-16 text-white md:px-10 md:pb-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Emmify Digital logo" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-lg font-bold">Emmify Digital</p>
              <p className="mt-1 max-w-sm text-sm text-slate-400">Lead Generation • CRM Automation • Google Business Profile Optimization</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-slate-300 transition hover:text-white">
              <Mail size={16} className="text-[#25D366]" /> {EMAIL}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 transition hover:text-white">
              <MessageCircle size={16} className="text-[#25D366]" /> {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Emmify Digital. All Rights Reserved.</p>
          <nav className="flex gap-6" aria-label="Footer">
            <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms of Service</a>
            <a href="/#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}