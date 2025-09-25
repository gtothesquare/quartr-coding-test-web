import { useEffect, useState } from 'react';
import { apiClient, ApiClientOptions } from '~/lib/apiClient';

/**
 *
 * Usage - caller is responsible for memoizing options when passed
 *
 * const Component = () => {
 *   const options = useMemo(() => ({ method: 'POST', body: data }), [data]);
 *   const { data, error, pending } = useApiClient('/api/endpoint', options);
 * };
 */
export function useApiClient<TResponse = unknown, TBody = unknown>(
  url: string,
  options?: ApiClientOptions<TBody>
) {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [pending, setPending] = useState<boolean>(false);
  const [data, setData] = useState<TResponse>();

  useEffect(() => {
    setPending(true);
    apiClient<TResponse, TBody>(url, options)
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err as Error);
        setPending(false);
      });
  }, [options, url]);

  return { data, error, pending };
}
