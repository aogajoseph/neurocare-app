import { Text, StyleSheet } from 'react-native';
import { tokens } from '@/theme/design-tokens';

export function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
  },
});
