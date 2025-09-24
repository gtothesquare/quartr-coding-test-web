import { useEffect, useMemo, useState } from 'react';
import { apiClient, ApiClientOptions } from '../lib/apiClient';

export function useApiClient<TResponse = unknown, TBody = unknown>(
  url: string,
  options: ApiClientOptions<TBody> = {}
) {
  //memoized options
  const stableOptions = useMemo(() => options, [JSON.stringify(options)]);

  const [error, setError] = useState<Error | undefined>(undefined);
  const [pending, setPending] = useState<boolean>(false);
  const [data, setData] = useState<TResponse>(undefined);

  useEffect(() => {
    setPending(true);
    apiClient<TResponse, TBody>(url, stableOptions)
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err as Error);
        setPending(false);
      });
  }, [stableOptions, url]);

  return { data, error, pending };
}
