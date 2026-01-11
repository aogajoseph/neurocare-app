import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function ReportScreen() {
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

        <Text style={styles.title}>Report a Concern</Text>
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
          If you encounter any issues, safety concerns, or incidents, you can report them here. Your input helps improve care, safety, and support services.
        </Text>

        <Text style={styles.subTitle}>What You Can Report</Text>
        <Text style={styles.paragraph}>
          Unsafe conditions, abuse or neglect, inappropriate behavior, missed care, or other concerns affecting patients, caregivers, or the community.
        </Text>

        <Text style={styles.subTitle}>How to Report</Text>
        <Text style={styles.paragraph}>
          Provide clear details including date, time, location, people involved, and the nature of the concern. Reports can be submitted anonymously or with your contact information.
        </Text>

        <Text style={styles.subTitle}>Follow-Up</Text>
        <Text style={styles.paragraph}>
          Once submitted, reports are reviewed by appropriate staff. You may receive feedback or follow-up depending on the urgency and type of concern.
        </Text>

        <Text style={styles.paragraph}>
          Reporting features will be expanded with backend integration to ensure secure submission, tracking, and resolution.
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