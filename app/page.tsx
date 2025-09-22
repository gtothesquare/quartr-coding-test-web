'use client';

import { useEffect, useState } from 'react';
import { Company } from './types';

export default function Home() {
  const [stuff1, setStuff1] = useState<Company[]>([]);
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch('/api/companies');
      const data2 = await data.json();
      console.log(data2);
      setStuff1(data2);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <main>
      <h2>Quartr</h2>
      <p>Trending companies</p>
      <p>{JSON.stringify(stuff1)}</p>
    </main>
  );
}
