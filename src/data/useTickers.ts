import { useEffect } from 'react';
import { listTickers } from '../services/listTickers';
import { useInfiniteQuery, keepPreviousData, InfiniteData } from '@tanstack/react-query';
import { ToastAndroid } from 'react-native';

function extractCursor(page: PaginatedResponse<Ticker>) {
  const cursor = page.next_url?.split('cursor=')[1]?.split('&')[0];
  return cursor;
}

type TPageParams = string;
type TData = PaginatedResponse<Ticker>;
type TQueryKey = Array<String>;

export const useTickers = (search = '') => {
  const query =  useInfiniteQuery<
  TData, any, InfiniteData<TData,TPageParams>, TQueryKey, TPageParams
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


  useEffect(()=>{
    if(query.isError && query.error){
      if(query.error.includes('Network Error')){
        ToastAndroid.show('Network Error: Please check your internet connection and try again.', ToastAndroid.LONG);
      }
      else if(query.error.includes('exceeded')){
        ToastAndroid.show('Please wait a minute and try agian later', ToastAndroid.LONG);
      }else {
        ToastAndroid.show(query.error, ToastAndroid.LONG);
      }
    }

  },[query.error, query.isError]);

  return {
    ...query,
    data,
  };
};
