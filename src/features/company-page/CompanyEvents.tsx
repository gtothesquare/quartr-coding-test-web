import React from 'react';
import { CompanyEvent } from '~/features/types';
import { DescriptionList } from '~/components/ui/DescriptionList';
import { Heading } from '~/components/ui/Heading';
import Link from 'next/link';
import { formatDateISO } from '~/lib/utils/date';
import { FileText } from 'lucide-react';

interface Props {
  events: CompanyEvent[];
}

function getCompanyEventTerms(companyEvent: CompanyEvent) {
  return [
    { label: 'Event title', value: companyEvent.eventTitle },
    {
      label: 'Report',
      value: (
        <Link
          aria-label="reportlink"
          className="text-indigo-500 underline"
          href={companyEvent.reportUrl}
        >
          <FileText />
        </Link>
      ),
    },
    { label: 'Event date', value: formatDateISO(companyEvent.eventDate) },
    { label: 'Fiscal period', value: companyEvent.fiscalPeriod },
    { label: 'Fiscal year', value: companyEvent.fiscalYear },
  ];
}

export function CompanyEvents({ events }: Props) {
  return (
    <>
      <Heading>Company events</Heading>
      {events.map((event) => {
        const terms = getCompanyEventTerms(event);
        return <DescriptionList key={event.eventId} terms={terms} />;
      })}
    </>
  );
}
