import React from 'react';
import CtaButton from './CtaButton';

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <CtaButton className="w-full">GET MY FREE BUSINESS AUDIT</CtaButton>
    </div>
  );
}