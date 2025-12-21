import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function DonateScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Donate</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Support Neurological Health</Text>
        <Text>Your donations help fund awareness campaigns, patient support, and prevention programs.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Donate via M-Pesa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Donate via PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Donate via Credit Card</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 16 },
});
