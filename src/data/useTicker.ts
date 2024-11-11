import { fetchTicker } from '../services/fetchTicker';
import { useQuery } from '@tanstack/react-query';

export const useTicker = (tickerId: string) => {
  return useQuery({
    retry: false,
    queryKey: ['ticker', tickerId],
    queryFn: () => fetchTicker(tickerId),
    staleTime: 1000 * 60 * 5,
   });
};
