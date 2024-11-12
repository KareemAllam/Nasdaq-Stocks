export const TickerA: Ticker = {
  active: true,
  cik: 'cik_1',
  composite_figi: 'composite_figi_1',
  currency_name: 'currency_1',
  last_updated_utc: '2023-10-01T12:00:00Z',
  locale: 'us',
  market: 'stocks',
  name: 'A',
  primary_exchange: 'primary_exchange_1',
  share_class_figi: 'share_class_figi_1',
  ticker: 'AAA',
  type: 'CS',
};

export const TickerB: Ticker = {
  active: true,
  cik: 'cik_2',
  composite_figi: 'composite_figi_2',
  currency_name: 'currency_2',
  last_updated_utc: '2023-10-01T12:00:00Z',
  locale: 'us',
  market: 'stocks',
  name: 'B',
  primary_exchange: 'primary_exchange_2',
  share_class_figi: 'share_class_figi_2',
  ticker: 'BBB',
  type: 'CS',
};

export const mockTickersData: PaginatedResponse<Ticker> = {
  status: 'OK',
  next_url: 'https://api.polygon.io/v3/reference/tickers?cursor=5',
  request_id: '5f7f3b1b4f7b3d001f4b3b1b',
  results: [
   TickerA,
   TickerB,
  ],
  count: 5,
};
