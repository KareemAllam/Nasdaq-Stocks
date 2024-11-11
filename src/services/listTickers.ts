import { ENDPOINTS } from '../contants/endpoints';
import ApiRequest from '../utils/ApiRequest';

export async function listTickers(
  { search, pageParam }:
  { search: string, pageParam: string }
){
  const response = await new ApiRequest(ENDPOINTS.TICKERS)
  .addQuery('active', 'true')
  .addQuery('cursor', pageParam)
  .addQuery('search', search)
  .addQuery('limit', '15')
  .GET<PaginatedResponse<Ticker>>();
  return response;
}
