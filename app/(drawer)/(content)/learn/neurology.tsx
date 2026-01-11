import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function NeurologyScreen() {
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

        <Text style={styles.title}>Understanding Neurology</Text>
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
        Neurology is the branch of medicine that focuses on the brain, spinal
        cord, nerves, and muscles. These systems control how we move, think,
        feel, speak, and interact with the world.
      </Text>

      <Text style={styles.paragraph}>
        Neurological conditions can affect anyone, at any age. Some develop at
        birth, others over time, and some occur suddenly due to injury or
        illness.
      </Text>

      <Text style={styles.subTitle}>What Neurologists Do</Text>

      <Text style={styles.paragraph}>
        Neurologists diagnose and manage conditions such as stroke, epilepsy,
        dementia, Parkinson’s disease, multiple sclerosis, migraines, and nerve
        disorders. Treatment often involves medication, rehabilitation, and
        long-term care planning.
      </Text>

      <Text style={styles.subTitle}>Living With Neurological Conditions</Text>

      <Text style={styles.paragraph}>
        Many people live full and meaningful lives with neurological conditions.
        Support from healthcare providers, caregivers, communities, and access
        to accurate information plays a vital role in improving quality of life.
      </Text>

      <Text style={styles.paragraph}>
        This app exists to help you understand, manage, and navigate neurological
        health with confidence and dignity.
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
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
    marginBottom: 16,
  },
});
