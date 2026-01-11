import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function MythsScreen() {
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

        <Text style={styles.title}>Myths & Facts</Text>
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
          There are many myths surrounding neurological conditions. Understanding the facts is essential for caregivers, patients, and the wider community.
        </Text>

        <Text style={styles.subTitle}>Myth 1: Neurological conditions are always hereditary</Text>
        <Text style={styles.paragraph}>
          Fact: While some conditions have a genetic component, many arise from injury, illness, or other non-hereditary factors.
        </Text>

        <Text style={styles.subTitle}>Myth 2: People with neurological conditions cannot lead normal lives</Text>
        <Text style={styles.paragraph}>
          Fact: With support, therapy, and proper care, many individuals live full, productive, and meaningful lives.
        </Text>

        <Text style={styles.subTitle}>Myth 3: Caregiving is only about physical support</Text>
        <Text style={styles.paragraph}>
          Fact: Emotional, social, and mental support is equally important for improving quality of life.
        </Text>

        <Text style={styles.paragraph}>
          Additional myths and facts will be expanded dynamically based on backend content and localization.
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
