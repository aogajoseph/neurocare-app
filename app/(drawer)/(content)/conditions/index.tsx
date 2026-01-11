import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const mockConditions = [
  { name: 'Alzheimer’s Disease', desc: 'Progressive disorder affecting memory and thinking.' },
  { name: 'Epilepsy', desc: 'A condition characterized by recurrent seizures.' },
  { name: 'Migraine', desc: 'Recurring headaches often with nausea and sensitivity to light.' },
  { name: 'Parkinson’s Disease', desc: 'Movement disorder affecting balance and coordination.' },
  { name: 'Stroke', desc: 'Sudden interruption of blood supply to the brain.' },
];

export default function ConditionsAZScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');

  const filtered = mockConditions.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* ───── Header ───── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>Conditions A–Z</Text>
      </View>

      {/* ───── Search ───── */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#6B7280" />
        <TextInput
          placeholder="Search conditions"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* ───── Alphabet Index ───── */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.alphaRow}
      >
        {alphabet.map(letter => (
          <Text key={letter} style={styles.alpha}>
            {letter}
          </Text>
        ))}
      </ScrollView>

      {/* ───── List ───── */}
      <ScrollView
        contentContainerStyle={[
          styles.list,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {filtered.map(item => (
          <TouchableOpacity
            key={item.name}
            style={styles.item}
            onPress={() =>
              router.push(`/conditions/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
            }
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.desc}</Text>
          </TouchableOpacity>
        ))}

        {filtered.length === 0 && (
          <Text style={styles.empty}>No conditions found.</Text>
        )}
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
  },
  title: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  /* Search */
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  input: {
    marginLeft: 8,
    fontSize: 15,
    flex: 1,
    color: '#111827',
  },

  /* Alphabet */
  alphaRow: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  alpha: {
    marginRight: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },

  /* List */
  list: {
    paddingHorizontal: 16,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  itemDesc: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 4,
  },

  empty: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 14,
    color: '#6B7280',
  },
});
