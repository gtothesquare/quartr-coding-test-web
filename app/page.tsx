'use client';

import { Company } from '../types';
import { useApiClient } from '../hooks/useApiClient';
import { CompanyItem } from '../components/company/CompanyItem';
import { Divider } from '../components/ui/Divider';
import React from 'react';
import { LoadingIndicator } from '../components/ui/LoadingIndicator';

export default function Home() {
  const { data, pending } = useApiClient<Company[]>('/api/companies');

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl">Trending companies</h2>
      <div className="flex flex-col space-y-2 max-w-4xl">
        {pending && (
          <div className="w-full flex justify-center">
            <LoadingIndicator />
          </div>
        )}
        {data?.map((company) => {
          return (
            <React.Fragment key={company.companyId}>
              <CompanyItem company={company} />
              <Divider />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
