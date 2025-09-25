import React from 'react';
import { Company } from '~/features/types';

interface Props {
  company: Company;
}

export function LogoBanner({ company }: Props) {
  return (
    <div className="w-full  py-6 flex justify-center items-center border border-gray-200 rounded-lg">
      <img
        src={company.logoDarkUrl}
        alt={company.companyName}
        className="max-w-full h-32 object-contain"
      />
    </div>
  );
}
