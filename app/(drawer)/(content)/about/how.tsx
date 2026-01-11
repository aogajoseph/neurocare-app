import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function HowScreen() {
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

        <Text style={styles.title}>How the App Works</Text>
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
          The Neuro Care App is designed to provide accessible, organized, and trustworthy information for individuals living with neurological conditions and their caregivers.
        </Text>

        <Text style={styles.subTitle}>Navigation</Text>
        <Text style={styles.paragraph}>
          Use the bottom tabs and drawer menu to access Home, Community, Neuro Assistant, and More. Each section is designed for ease of use and structured access to relevant content.
        </Text>

        <Text style={styles.subTitle}>Content Delivery</Text>
        <Text style={styles.paragraph}>
          The app provides educational resources, guides, and multimedia content that is dynamically loaded from the backend. Chapters, sections, and articles are organized for clarity and easy reference.
        </Text>

        <Text style={styles.subTitle}>Personalization</Text>
        <Text style={styles.paragraph}>
          Users can set preferences, choose languages, and receive content tailored to their needs. The Neuro Assistant provides hybrid guidance combining general neurology knowledge with backend-authoritative resources.
        </Text>

        <Text style={styles.subTitle}>Safety & Support</Text>
        <Text style={styles.paragraph}>
          The app integrates Help, Emergency, and Reporting features to ensure safety and facilitate timely support for both users and caregivers.
        </Text>

        <Text style={styles.paragraph}>
          All app functionalities and content are maintained via secure backend systems, ensuring accuracy, privacy, and continuous updates.
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