import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function LearnScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conditions (A-Z)</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Neurological Conditions</Text>
        <Text>Information about stroke, epilepsy, dementia, migraines, Parkinson’s, etc.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prevention & Lifestyle</Text>
        <Text>Tips for brain health, exercise, nutrition, mental wellness.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Myth vs Fact</Text>
        <Text>Debunk common myths about neurological disorders.</Text>
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
