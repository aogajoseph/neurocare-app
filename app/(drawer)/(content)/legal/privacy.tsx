import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function PrivacyScreen() {
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

        <Text style={styles.title}>Privacy Policy</Text>
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
          The Neuro Care App respects your privacy and is committed to protecting your personal data. This policy outlines how information is collected, used, and safeguarded.
        </Text>

        <Text style={styles.subTitle}>Information Collection</Text>
        <Text style={styles.paragraph}>
          The app collects data necessary for functionality, personalization, and improvement of user experience. This may include usage data, preferences, and optional user-submitted information.
        </Text>

        <Text style={styles.subTitle}>Use of Information</Text>
        <Text style={styles.paragraph}>
          Collected information is used to provide content, personalize experiences, facilitate support services, and communicate relevant updates to users.
        </Text>

        <Text style={styles.subTitle}>Data Security</Text>
        <Text style={styles.paragraph}>
          All personal information is stored securely and protected against unauthorized access, disclosure, or misuse. We follow industry-standard practices to ensure data safety.
        </Text>

        <Text style={styles.subTitle}>Sharing & Third Parties</Text>
        <Text style={styles.paragraph}>
          Data is not sold or shared with third parties without consent, except as required by law or to provide essential services within the app.
        </Text>

        <Text style={styles.paragraph}>
          The privacy policy may be updated periodically. Users are encouraged to review it regularly for any changes.
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