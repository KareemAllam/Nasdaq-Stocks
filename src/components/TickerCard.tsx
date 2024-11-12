import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TickerAvatar from './TickerAvatar';
import { theme } from '../theme';

type TickerCardProps = {
  ticker: Ticker;
};

export default function TickerCard(props: TickerCardProps) {
  const { name, ticker } = props.ticker;

  return (
    <View style={styles.card}>
      <TickerAvatar ticker={props.ticker}/>
      <Text style={styles.symbol}>{ticker}</Text>
      <Text numberOfLines={2} style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: theme.colors.border,
    borderWidth: 1,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,

    alignItems: 'center',
    justifyContent: 'center',

    padding: theme.spacing.md,
    width: '48%',
    aspectRatio: 1.2,
    gap: 6,
  },
  symbol: {
    color: theme.colors.text.primary,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.xl,
  },
  name: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
    fontSize: 12,
    overflow: 'hidden',
    // textOverflow: 'ellipsis',
  },
});
