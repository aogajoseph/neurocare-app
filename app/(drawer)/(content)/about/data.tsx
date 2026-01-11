import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function DataScreen() {
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

        <Text style={styles.title}>Data Sources</Text>
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
          The Neuro Care App relies on multiple authoritative data sources to ensure accuracy, reliability, and relevance of the information provided to users.
        </Text>

        <Text style={styles.subTitle}>Medical & Clinical Sources</Text>
        <Text style={styles.paragraph}>
          Peer-reviewed journals, recognized medical institutions, research studies, and clinical guidelines contribute to content related to neurological conditions and treatments.
        </Text>

        <Text style={styles.subTitle}>Community & Support Networks</Text>
        <Text style={styles.paragraph}>
          Feedback and experiences from caregiver groups, patient communities, and non-governmental organizations help shape practical guidance and real-world applicability.
        </Text>

        <Text style={styles.subTitle}>Institutional & Government Data</Text>
        <Text style={styles.paragraph}>
          Information from health ministries, regulatory bodies, and public health authorities ensures alignment with current policies, standards, and safety protocols.
        </Text>

        <Text style={styles.paragraph}>
          Additional sources and references will be listed dynamically through backend integration, allowing updates, localization, and verification of all data used within the app.
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