import { listTickers } from '../services/listTickers';
import { useInfiniteQuery, keepPreviousData, InfiniteData } from '@tanstack/react-query';

function extractCursor(page: PaginatedResponse<Ticker>) {
  const cursor = page.next_url?.split('cursor=')[1]?.split('&')[0];
  return cursor;
}

type TPageParams = string;
type TData = PaginatedResponse<Ticker>;
type TQueryKey = Array<String>;

export const useTickers = (search = '') => {
  const query =  useInfiniteQuery<
  TData, unknown, InfiniteData<TData,TPageParams>, TQueryKey, TPageParams
  >({
    queryKey: ['tickers', search],
    initialPageParam: '',
    retry: false,
    getNextPageParam: extractCursor,
    placeholderData: keepPreviousData,
    queryFn: async (arg) => {
      return await listTickers({ pageParam: arg.pageParam, search });
    },
  });

	const data = query.data?.pages.flatMap((page) => page.results) ?? [];
  return {
    ...query,
    data,
  };
};
