import { theme } from '../theme';
// import { useTicker } from '../data/useTicker';
import React from 'react';
import { View, Text, Image, StyleSheet, TextStyle } from 'react-native';
import { POLYGON_API_KEY } from '@env';

type TickerAvatarProps = {
  ticker: Ticker;
};

export default function TickerAvatar(props: TickerAvatarProps) {
  const { ticker } = props.ticker;

  // const { data: tickerDetails } = useTicker(props.ticker.ticker);

  // const branding = tickerDetails?.results?.branding;
  // let logoUrl = branding?.icon_url || branding?.logo_url;
  let logoUrl: string | undefined;

  if (logoUrl){
    logoUrl += `?apiKey=${POLYGON_API_KEY}`;
    return <Image source={{ uri: logoUrl }} style={styles.logo} />;
  }

  else {
    return <View style={styles.placeholderLogo}>
      <Text style={styles.placeholderText}>{ticker.slice(0, 2)}</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginBottom: 8,
    borderRadius: 8,
  },
  placeholderLogo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginBottom: 8,

    borderColor: theme.colors.border,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.regular as TextStyle['fontWeight'],
  },
  symbol: {
    color: theme.colors.text.primary,
    fontWeight: theme.fontWeight.regular,
    fontSize: 14,
  },
  name: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.sm,
  },
});
