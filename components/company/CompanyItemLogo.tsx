import { Company } from '../../types';
import React from 'react';

interface Props {
  company: Company;
}

export function CompanyItemLogo({ company }: Props) {
  const logoSrc = company.iconUrl ?? company.logoLightUrl;
  return (
    <div
      className="border border-slate-300 w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{
        backgroundColor: company.colorSettings.brandColor,
      }}
    >
      <img
        className="w-full h-full object-contain p-1"
        src={logoSrc}
        alt={`Logo for company ${company.companyName}`}
      />
    </div>
  );
}
