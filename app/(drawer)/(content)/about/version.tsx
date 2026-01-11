import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function VersionScreen() {
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

        <Text style={styles.title}>Version & Updates</Text>
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
          Stay informed about the current version of the Neuro Care App and learn about recent updates, enhancements, and bug fixes.
        </Text>

        <Text style={styles.subTitle}>Current Version</Text>
        <Text style={styles.paragraph}>
          Version: 1.0.0 (example)
          This represents the initial public release with core features and content modules.
        </Text>

        <Text style={styles.subTitle}>Recent Updates</Text>
        <Text style={styles.paragraph}>
          - Added Caregiver Guide and Living Well content.
          - Integrated Help, Emergency, and Reporting features.
          - Backend-driven content for Neurology, Myths, and Data Sources.
          - Performance improvements and bug fixes.
        </Text>

        <Text style={styles.subTitle}>Future Updates</Text>
        <Text style={styles.paragraph}>
          Upcoming features include multi-language support, more interactive content, personalized notifications, and enhanced accessibility options.
        </Text>

        <Text style={styles.paragraph}>
          All versioning information is maintained through backend configuration to ensure accuracy and timely updates for all users.
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