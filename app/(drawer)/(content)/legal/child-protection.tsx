import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function ChildProtectionScreen() {
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

        <Text style={styles.title}>Child Protection</Text>
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
          The Neuro Care App is committed to protecting children and ensuring a safe environment for young users and dependents.
        </Text>

        <Text style={styles.subTitle}>Guidelines for Protection</Text>
        <Text style={styles.paragraph}>
          - Children should never share personal information publicly.
          - Interactions within the app should be supervised by caregivers.
          - Unsafe content should be reported immediately using the reporting feature.
        </Text>

        <Text style={styles.subTitle}>Reporting Concerns</Text>
        <Text style={styles.paragraph}>
          Any incidents involving potential abuse, neglect, or safety threats should be reported promptly through the in-app reporting system or local authorities.
        </Text>

        <Text style={styles.subTitle}>Caregiver Responsibilities</Text>
        <Text style={styles.paragraph}>
          Caregivers should monitor app usage, guide children through appropriate content, and ensure adherence to safety protocols.
        </Text>

        <Text style={styles.paragraph}>
          Additional child protection policies and resources will be maintained dynamically through backend integration to keep the app compliant and safe.
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
