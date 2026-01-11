import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function TermsScreen() {
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

        <Text style={styles.title}>Terms & Conditions</Text>
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
          By using the Neuro Care App, you agree to the following terms and conditions, which govern the use of the platform, content, and services.
        </Text>

        <Text style={styles.subTitle}>Use of Content</Text>
        <Text style={styles.paragraph}>
          All educational content, guides, and resources are for informational purposes only and do not replace professional medical advice, diagnosis, or treatment.
        </Text>

        <Text style={styles.subTitle}>User Responsibilities</Text>
        <Text style={styles.paragraph}>
          Users are responsible for providing accurate information, using the app responsibly, and respecting other users and community guidelines.
        </Text>

        <Text style={styles.subTitle}>Privacy & Data</Text>
        <Text style={styles.paragraph}>
          The app collects and stores data according to the privacy policy. Personal information is protected and used to enhance user experience and support services.
        </Text>

        <Text style={styles.subTitle}>Limitations of Liability</Text>
        <Text style={styles.paragraph}>
          The developers and associated organizations are not liable for any damages, misuse, or reliance on content provided within the app.
        </Text>

        <Text style={styles.paragraph}>
          The terms and conditions may be updated periodically. Users are encouraged to review this section regularly for any changes.
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