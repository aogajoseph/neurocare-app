import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useLanguage } from '@/src/i18n/LanguageContext';

const translations = {
  title: { en: 'Conditions (A-Z)', sw: 'Hali (A-Z)', fr: 'Conditions (A-Z)' },
  neurological: { en: 'Neurological Conditions', sw: 'Hali za Neurolojia', fr: 'Conditions Neurologiques' },
  neurologicalDesc: {
    en: 'Information about stroke, epilepsy, dementia, migraines, Parkinson’s, etc.',
    sw: 'Taarifa kuhusu kiharusi, epilepsy, dementia, migraine, Parkinson, n.k.',
    fr: 'Informations sur AVC, épilepsie, démence, migraines, Parkinson, etc.',
  },
  prevention: { en: 'Prevention & Lifestyle', sw: 'Kingamwili & Mtindo wa Maisha', fr: 'Prévention & Mode de Vie' },
  preventionDesc: {
    en: 'Tips for brain health, exercise, nutrition, mental wellness.',
    sw: 'Vidokezo kwa afya ya ubongo, mazoezi, lishe, ustawi wa akili.',
    fr: 'Conseils pour la santé du cerveau, exercice, nutrition, bien-être mental.',
  },
  myth: { en: 'Myth vs Fact', sw: 'Hadithi dhidi ya Ukweli', fr: 'Mythe vs Fait' },
  mythDesc: {
    en: 'Debunk common myths about neurological disorders.',
    sw: 'Kufichua hadithi za kawaida kuhusu matatizo ya neva.',
    fr: 'Démystifier les mythes courants sur les troubles neurologiques.',
  },
};

export default function LearnScreen() {
  const { language } = useLanguage();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{translations.title[language]}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{translations.neurological[language]}</Text>
        <Text>{translations.neurologicalDesc[language]}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{translations.prevention[language]}</Text>
        <Text>{translations.preventionDesc[language]}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{translations.myth[language]}</Text>
        <Text>{translations.mythDesc[language]}</Text>
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
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '500', marginBottom: 6 },
});
