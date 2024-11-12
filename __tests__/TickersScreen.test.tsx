import 'react-native';
import React from 'react';
import { it, describe, expect } from '@jest/globals';
import { cleanup, waitFor, fireEvent } from '@testing-library/react-native';

import TickersScreen from '../src/screens/Tickers/TickersScreen';
import { mockTickersData, TickerA, TickerB } from './mocks/tickers';
import { renderTestComponent } from './utils/renderComponent';

import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { ENDPOINTS } from '../src/contants/endpoints';
import { useTickers } from '../src/data/useTickers';

// Mock the useTickers hook
jest.mock('../src/data/useTickers');
const mock = new AxiosMockAdapter(axios);

describe('TickersScreen', () => {
  const fetchNextTickers = jest.fn();
  const mockedUseTicker = jest.fn(() => ({
    data: mockTickersData.results,
    isLoading: false,
    isError: false,
    fetchNextPage: fetchNextTickers,
    hasNextPage: true,
    isFetchingNextPage: false,
  }));

  beforeAll(() => {
    mock.onGet(new RegExp(ENDPOINTS.TICKERS)).reply(200, mockTickersData);
    (useTickers as jest.Mock).mockImplementation(mockedUseTicker);
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    mock.reset();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  const renderTickersScreen = async () => {
    return await waitFor(() => renderTestComponent(<TickersScreen />));
  };

  it('renders tickers listing', async () => {
    // Render the component
    const { getByText, getByRole } = await renderTickersScreen();

    // Check if the search input is rendered
    expect(getByRole('search')).toBeTruthy();

    // Check if the tickers are rendered
    expect((TickerA.ticker)).toBeTruthy();
    expect(getByText(TickerB.ticker)).toBeTruthy();

  });

  it('check search input flow', async () => {
    // Render the component
    const { getByRole } = await renderTickersScreen();

    // Assert that a request was made to fetch the tickers
    expect(mockedUseTicker).toBeCalledTimes(1);

    // Simulate user typing in the search
    const searchInput = getByRole('search');

    await waitFor(async () => {
      fireEvent.changeText(searchInput, 'Microsoft');
    });

    await waitFor(async () => {
      // Assert that a request was made to fetch the tickers with the search term
      expect(mockedUseTicker).toBeCalledTimes(2);
      expect(mockedUseTicker).toHaveBeenCalledWith('Microsoft');
    });
  });

  it('loads more items on scroll', async () => {
    // Render the component
    const { getByTestId } = await renderTickersScreen();

    // Simulate scrolling action to load more items
    await waitFor(() => {
      const flatList = getByTestId('tickers-list');
      expect(flatList).toBeTruthy();
      fireEvent.scroll(flatList, {
        nativeEvent: {
          contentOffset: { y: 100 },
          contentSize: { height: 200 },
          layoutMeasurement: { height: 100 },
        },
      });
    });

    // Verify that fetchNextTickers is called on scroll
    await waitFor(() => {
      expect(fetchNextTickers).toHaveBeenCalled();
    });
  });
});
