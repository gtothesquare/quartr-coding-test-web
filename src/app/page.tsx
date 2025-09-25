import React from 'react';
import { CompaniesList } from '~/features/companies-liist/CompaniesList';

export default function Home() {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl my-4">Trending companies</h2>
      <CompaniesList />
    </div>
  );
}
