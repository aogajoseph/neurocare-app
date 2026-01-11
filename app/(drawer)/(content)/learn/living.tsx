import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function LivingWellScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* ───── Header ───── */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.title}>Living Well</Text>
      </View>

      {/* ───── Content ───── */}
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.paragraph}>
          Living well with a neurological condition is about maintaining quality of life, finding meaning, and engaging with the world in ways that bring satisfaction and joy.
        </Text>

        <Text style={styles.subTitle}>Daily Wellness</Text>
        <Text style={styles.paragraph}>
          Practical strategies for energy management, balanced nutrition, gentle exercise, and maintaining routines to support physical and mental health.
        </Text>

        <Text style={styles.subTitle}>Social Connection</Text>
        <Text style={styles.paragraph}>
          Staying connected with family, friends, and support communities fosters emotional wellbeing and reduces feelings of isolation.
        </Text>

        <Text style={styles.subTitle}>Mental & Emotional Health</Text>
        <Text style={styles.paragraph}>
          Techniques for stress management, mindfulness, coping with challenges, and accessing professional support when needed.
        </Text>

        <Text style={styles.subTitle}>Engaging in Meaningful Activities</Text>
        <Text style={styles.paragraph}>
          Hobbies, creative outlets, volunteer work, and personal goals help nurture purpose, satisfaction, and resilience.
        </Text>

        <Text style={styles.paragraph}>
          Content will be expanded and personalized based on backend configuration and user preferences.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  /* Content */
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#aa2078',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
    marginBottom: 16,
  },
});
