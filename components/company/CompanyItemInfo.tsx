import React from 'react';
import { Company } from '../../types';

interface Props {
  company: Company;
}

export function CompanyItemInfo({ company }: Props) {
  return (
    <div className="overflow-hidden w-2xl">
      <h3 className="text-base font-light text-gray-900">
        {company.companyName}
      </h3>
      <p className="text-xs text-gray-500 truncate">{company.description}</p>
    </div>
  );
}
