import React from 'react';
import { View } from 'react-native';
import { theme } from '../theme';

export default function VerticalSeparator(){
  return <View style={{ height: theme.spacing.md }} />;
}
