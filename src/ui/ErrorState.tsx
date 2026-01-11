import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '@/theme/design-tokens';

export function ErrorState({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.lg,
    alignItems: 'center',
  },
  text: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.state.error,
    textAlign: 'center',
  },
});
