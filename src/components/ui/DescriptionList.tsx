import React from 'react';

export interface Term {
  label: React.ReactNode;
  value: React.ReactNode;
}

interface DescriptionTermProps {
  term: Term;
}

function DescriptionTerm({ term }: DescriptionTermProps) {
  return (
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">{term.label}</dt>
      <dd className="text-gray-700 sm:col-span-2">{term.value}</dd>
    </div>
  );
}

interface DescriptionListProps {
  terms: Term[];
}

export function DescriptionList({ terms }: DescriptionListProps) {
  return (
    <div>
      <dl className="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
        {terms.map((term, index) => (
          <DescriptionTerm
            key={`${term.label}-${term.value}-${index}`}
            term={term}
          />
        ))}
      </dl>
    </div>
  );
}
