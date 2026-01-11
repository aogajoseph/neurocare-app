import { View, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { tokens } from '@/theme/design-tokens';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
};

export function Card({ children, style, onPress }: Props) {
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.pressed,
          style,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    ...tokens.elevation.card,
  },
  pressed: {
    opacity: 0.9,
  },
});
