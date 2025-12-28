import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function CommunityScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Community</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Support Groups</Text>
        <Text>Join local support groups and meet others affected by neurological conditions.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Events & Campaigns</Text>
        <Text>Information about upcoming awareness events and campaigns.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Volunteer Opportunities</Text>
        <Text>Ways to get involved and help Neuro Care Foundation.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 16 },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  cardTitle: { fontSize: 18, fontWeight: '500', marginBottom: 6 },
});
