import React, {useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  NativeScrollEvent,
} from 'react-native';

import {useTickers} from '../../data/useTickers';
import {debounce} from '../../utils/debounce';

import {styles} from './styles';
import {theme} from '../../theme';

import {VerticalGap, TickerCard} from '../../components';

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 100;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export default function StocksScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: tickersData,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useTickers(searchTerm);

  const searchStocks = debounce((_searchTerm: string) => {
    setSearchTerm(_searchTerm);
  }, 100);

  const renderItem = ({item}: {item: Ticker}) => (
    <TickerCard key={item.cik} ticker={item} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for stocks"
        placeholderTextColor={theme.colors.text.secondary}
        onChangeText={text => searchStocks(text)}
      />
      {isLoading ?
        <ActivityIndicator size={'large'} />
      : (
        <FlatList
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              fetchNextPage();
            }
          }}
          scrollEventThrottle={50}
          data={tickersData}
          renderItem={renderItem}
          keyExtractor={item => item.ticker}
          ItemSeparatorComponent={VerticalGap}
          numColumns={2}
          columnWrapperStyle={styles.column}
          onEndReachedThreshold={0.95}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator /> : null
          }
        />
      )}
    </View>
  );
}
