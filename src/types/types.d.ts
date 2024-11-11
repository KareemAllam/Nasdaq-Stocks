interface Address {
  address1: string;
  city: string;
  postal_code: string;
  state: string;
}

interface Branding {
  icon_url: string;
  logo_url: string;
}

interface Ticker {
  active: boolean;
  cik: string;
  composite_figi: string;
  currency_name: string;
  last_updated_utc: string;
  locale: string;
  market: string;
  name: string;
  primary_exchange: string;
  share_class_figi: string;
  ticker: string;
  type: string;
}

interface TickerDetailed extends Ticker {
  address?: Address;
  branding?: Branding;
  round_lot?: number;
  list_date?: string;
  sic_code?: string;
  market_cap?: number;
  ticker_root?: string;
  description?: string;
  homepage_url?: string;
  sic_description?: string;
  total_employees?: number;
  weighted_shares_outstanding?: number;
  share_class_shares_outstanding?: number;
}

interface ResponseMeta {
  request_id: string;
  status: string;
}

interface Response<T> extends ResponseMeta {
  result: T;
}

interface PaginatedResponse<T> extends ResponseMeta {
  results: Array<T>;
  next_url: string;
  count: number;
}
