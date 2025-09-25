'use client';

import React from 'react';
import { useApiClient } from '~/hooks/useApiClient';
import { Company } from '~/features/types';
import { LoadingIndicator } from '~/components/ui/LoadingIndicator';
import { CompanyItem } from './CompanyItem';
import { Divider } from '~/components/ui/Divider';
import { Alert } from '~/components/ui/Alert';

export function CompaniesList() {
  const { data, pending, error } = useApiClient<Company[]>('/api/companies');
  return (
    <div className="flex flex-col space-y-2 max-w-4xl">
      {error && <Alert type="error">{error.message}</Alert>}
      {pending && (
        <div className="w-full flex justify-center">
          <LoadingIndicator />
        </div>
      )}
      {data?.map((company, index) => {
        return (
          <React.Fragment key={company.companyId}>
            {index === 0 && <Divider />}
            <CompanyItem company={company} />
            <Divider />
          </React.Fragment>
        );
      })}
    </div>
  );
}
