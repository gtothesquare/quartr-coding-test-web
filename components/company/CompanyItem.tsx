import React from 'react';
import { Company } from '../../types';
import { ChevronRight } from 'lucide-react';
import { CompanyItemInfo } from './CompanyItemInfo';

interface Props {
  company: Company;
}

function CompanyItemLogo({ company }: Props) {
  return (
    <div
      className="border border-slate-300 w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{
        backgroundColor: company.colorSettings.brandColor,
      }}
    >
      <img
        className="w-full h-full object-contain p-1"
        src={company.logoLightUrl}
        alt="Logo"
      />
    </div>
  );
}

export function CompanyItem({ company }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-4">
        <CompanyItemLogo company={company} />
        <CompanyItemInfo company={company} />
      </div>
      <div>
        <ChevronRight className="text-gray-400" size={20} />
      </div>
    </div>
  );
}
