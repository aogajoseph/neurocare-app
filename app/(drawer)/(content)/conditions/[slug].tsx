import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '@/i18n/LanguageContext';

/**
 * Temporary local copy.
 * Later this will be replaced by backend data:
 * /api/conditions/:slug
 */
const conditionCopy: Record<
  string,
  {
    title: { en: string; sw: string };
    summary: { en: string; sw: string };
    symptoms: { en: string[]; sw: string[] };
    care: { en: string; sw: string };
  }
> = {
  stroke: {
    title: { en: 'Stroke', sw: 'Kiharusi' },
    summary: {
      en: 'A stroke occurs when blood flow to part of the brain is interrupted, causing brain cells to be damaged.',
      sw: 'Kiharusi hutokea pale mtiririko wa damu kwenda kwenye ubongo unapokatizwa.',
    },
    symptoms: {
      en: ['Sudden weakness', 'Difficulty speaking', 'Facial drooping'],
      sw: ['Udhaifu wa ghafla', 'Shida ya kuzungumza', 'Uso kulegea'],
    },
    care: {
      en: 'Immediate medical attention is critical. Long-term care may involve therapy and lifestyle changes.',
      sw: 'Huduma ya haraka ya kitabibu ni muhimu. Huduma ya muda mrefu inaweza kujumuisha tiba na mabadiliko ya maisha.',
    },
  },
};

export default function ConditionDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const { language } = useLanguage();
  const insets = useSafeAreaInsets();

  const data = slug ? conditionCopy[slug] : null;

  return (
    <>
      {/* Page title handled by Stack (drawer/content) */}
      <Stack.Screen
        options={{
          title: data?.title[language] ?? 'Condition',
        }}
      />

      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 32 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {!data ? (
          <Text style={styles.missing}>
            Content for this condition is coming soon.
          </Text>
        ) : (
          <>
            {/* ───── Title ───── */}
            <Text style={styles.title}>{data.title[language]}</Text>

            {/* ───── Summary ───── */}
            <Text style={styles.summary}>{data.summary[language]}</Text>

            {/* ───── Symptoms ───── */}
            <Text style={styles.sectionTitle}>
              {language === 'sw' ? 'Dalili za Kawaida' : 'Common Symptoms'}
            </Text>

            <View style={styles.list}>
              {data.symptoms[language].map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  • {item}
                </Text>
              ))}
            </View>

            {/* ───── Care & Support ───── */}
            <Text style={styles.sectionTitle}>
              {language === 'sw' ? 'Huduma na Msaada' : 'Care & Support'}
            </Text>

            <Text style={styles.paragraph}>{data.care[language]}</Text>

            {/* ───── Gentle reassurance ───── */}
            <View style={styles.reassurance}>
              <Text style={styles.reassuranceText}>
                {language === 'sw'
                  ? 'Kumbuka: msaada upo, na hatua ndogo zinaweza kuleta tofauti kubwa.'
                  : 'Remember: support is available, and small steps can make a meaningful difference.'}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  summary: {
    fontSize: 16,
    lineHeight: 22,
    color: '#374151',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    marginTop: 16,
  },

  list: {
    marginBottom: 12,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
    marginBottom: 4,
  },

  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },

  reassurance: {
    marginTop: 28,
    paddingVertical: 16,
  },
  reassuranceText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4B5563',
    textAlign: 'center',
  },

  missing: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 40,
  },
});
