import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function PlatformScreen() {
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

        <Text style={styles.title}>The Neuro Care Platform</Text>
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
          The Neuro Care Platform is designed to provide comprehensive information, support, and tools for individuals living with neurological conditions, caregivers, and healthcare providers.
        </Text>

        <Text style={styles.subTitle}>Key Features</Text>
        <Text style={styles.paragraph}>
          - Educational resources on neurology and caregiving.
          - Community support groups and forums.
          - Assistance and emergency resources.
          - Personalized content and recommendations based on user preferences.
        </Text>

        <Text style={styles.subTitle}>Purpose</Text>
        <Text style={styles.paragraph}>
          Our goal is to empower users with knowledge, facilitate access to care and support, and improve quality of life for people affected by neurological conditions.
        </Text>

        <Text style={styles.subTitle}>Future Enhancements</Text>
        <Text style={styles.paragraph}>
          The platform will continue to expand with multi-language support, localized content, interactive features, and deeper integration with healthcare services.
        </Text>

        <Text style={styles.paragraph}>
          All content and features are managed and updated dynamically through backend configurations.
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