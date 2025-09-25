import React from 'react';
import { CompanyPage } from '~/features/company-page/CompanyPage';
import { toCompanyId } from '~/features/types';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const companyId = toCompanyId(id);
  return <CompanyPage companyId={companyId} />;
}
