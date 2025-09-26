import React from 'react';
import { DescriptionList } from '~/components/ui/DescriptionList';
import { Company } from '~/features/types';
import { Heading } from '~/components/ui/Heading';

interface Props {
  company: Company;
}

function getGeneralTerms(company: Company) {
  return [
    {
      label: 'Company',
      value: company.companyName,
    },
    {
      label: 'Description',
      value: company.description,
    },
    {
      label: 'Company ticker',
      value: company.companyTicker,
    },
    {
      label: 'Reporting currency',
      value: company.reportingCurrency,
    },
    {
      label: 'Country',
      value: company.companyCountry,
    },
  ];
}

export function GeneralDetails({ company }: Props) {
  const terms = getGeneralTerms(company);
  return (
    <>
      <Heading>General</Heading>
      <DescriptionList terms={terms} />
    </>
  );
}
