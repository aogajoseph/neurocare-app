import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { tokens } from '@/theme/design-tokens';

type Props = {
  label: string;
  onPress: () => void;
  emphasis?: boolean;
};

export function Chip({ label, onPress, emphasis }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.chip,
        emphasis && styles.emphasis,
      ]}
    >
      <Text
        style={[
          styles.text,
          emphasis && styles.emphasisText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: tokens.colors.surface.soft,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.xl,
  },
  text: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.brand.secondary,
    fontWeight: tokens.typography.weight.medium,
  },
  emphasis: {
    backgroundColor: tokens.colors.brand.secondary,
  },
  emphasisText: {
    color: tokens.colors.text.inverse,
  },
});
