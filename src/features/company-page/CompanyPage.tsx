'use client';

import React from 'react';
import { Company, CompanyId } from '~/features/types';
import { useApiClient } from '~/hooks/useApiClient';
import { LoadingIndicator } from '~/components/ui/LoadingIndicator';
import { GeneralDetails } from '~/features/company-page/GeneralDetails';
import { CompanyEvents } from '~/features/company-page/CompanyEvents';
import { LogoBanner } from '~/features/company-page/LogoBanner';
import { Alert } from '~/components/ui/Alert';

interface Props {
  companyId: CompanyId;
}

export function CompanyPage({ companyId }: Props) {
  const {
    data: company,
    pending,
    error,
  } = useApiClient<Company>(`/api/companies/${companyId}`);

  return (
    <div>
      {error && <Alert type="error">{error.message}</Alert>}
      {pending && (
        <div className="w-full flex justify-center">
          <LoadingIndicator />
        </div>
      )}
      {company && (
        <div className="flex flex-col space-y-4">
          <LogoBanner company={company} />
          <GeneralDetails company={company} />
          <CompanyEvents events={company.events} />
        </div>
      )}
    </div>
  );
}
