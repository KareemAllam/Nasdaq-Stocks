import { theme } from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    paddingVertical: 36,
    paddingHorizontal: 24,
  },
  searchBar: {
    backgroundColor: theme.colors.background.secondary,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    padding: 10,
    marginBottom: 20,
    color: theme.colors.text.primary,
  },
  column: {
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
});
