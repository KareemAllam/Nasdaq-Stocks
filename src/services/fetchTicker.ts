import { ENDPOINTS } from '../contants/endpoints';
import ApiRequest from '../utils/ApiRequest';

export async function fetchTicker(tickerId: string){
  const response = await new ApiRequest(ENDPOINTS.TICKERS_DETAILS(tickerId))
  .GET<Response<TickerDetailed>>();
  return response;
}
