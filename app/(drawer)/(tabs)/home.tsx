import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '@/i18n/LanguageContext';
import { useRouter } from 'expo-router';
import { useHome } from '@/bootstrap/HomeContext';
import { tokens } from '@/theme/design-tokens';

import { Card } from '@/ui/Card';
import { SectionTitle } from '@/ui/SectionTitle';
import { Chip } from '@/ui/Chip';
import { ScreenLoader } from '@/ui/ScreenLoader';
import { ErrorState } from '@/ui/ErrorState';
import { uiCopy } from '@/i18n/ui';

export default function HomeScreen() {
  const { language } = useLanguage();
  const { home, loading } = useHome();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  if (loading) return <ScreenLoader />;
  if (!home) return <ErrorState message={uiCopy.errorGeneric[language]} />;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingBottom: insets.bottom + tokens.spacing.xl },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.welcome}>{home.hero.welcome[language]}</Text>
        <Text style={styles.intro}>{home.hero.intro[language]}</Text>
      </View>

      {/* What you can do */}
      <SectionTitle>{home.sectionTitles.whatYouCanDo[language]}</SectionTitle>
      {home.whatYouCanDo.map((item) => (
        <Card
          key={item.id}
          style={{ marginBottom: tokens.spacing.md }}
          onPress={() => {
            switch (item.id) {
              case 'conditions':
                router.push('/(drawer)/(content)/learn/neurology');
                break;
              case 'living':
                router.push('/(drawer)/(content)/learn/living');
                break;
              case 'support':
                router.push('/(drawer)/(content)/support/help');
                break;
            }
          }}
        >
          <Text style={styles.cardTitle}>{item.title[language]}</Text>
          <Text style={styles.cardDesc}>{item.description[language]}</Text>
        </Card>
      ))}

      {/* Conditions */}
      <SectionTitle>{home.sectionTitles.conditionsAZ[language]}</SectionTitle>
      <View style={styles.chipsRow}>
        {home.popularConditions.map((c) => (
          <Chip
            key={c.slug}
            label={c.label}
            onPress={() =>
              router.push(`/(drawer)/(content)/conditions/${c.slug}`)
            }
          />
        ))}
        <Chip
          label={`${home.viewAll[language]} →`}
          emphasis
          onPress={() => router.push('/(drawer)/(content)/conditions')}
        />
      </View>

      {/* Learn with confidence */}
      <SectionTitle>{home.sectionTitles.learnWithConfidence[language]}</SectionTitle>
      {home.learnWithConfidence.map((item) => (
        <Card
          key={item.id}
          style={{ marginBottom: tokens.spacing.md }}
          onPress={() => {
            switch (item.id) {
              case 'myths':
                router.push('/(drawer)/(content)/learn/myths');
                break;
              case 'caregiver':
                router.push('/(drawer)/(content)/learn/caregiver');
                break;
              case 'child':
                router.push('/(drawer)/(content)/legal/child-protection');
                break;
            }
          }}
        >
          <Text style={styles.cardTitle}>{item.title[language]}</Text>
        </Card>
      ))}

      {/* Need help now */}
      <SectionTitle>{home.sectionTitles.helpNow[language]}</SectionTitle>
      {home.helpNow.map((item) => (
        <Card
          key={item.id}
          style={{ marginBottom: tokens.spacing.md }}
          onPress={() => {
            switch (item.id) {
              case 'emergency':
                router.push('/(drawer)/(content)/support/emergency');
                break;
              case 'report':
                router.push('/(drawer)/(content)/support/report');
                break;
            }
          }}
        >
          <Text style={styles.cardTitle}>{item.title[language]}</Text>
        </Card>
      ))}

      {/* Reassurance */}
      <Card style={styles.reassurance}>
        <Text style={styles.reassuranceText}>{home.reassurance[language]}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.background,
  },

  hero: {
    marginBottom: tokens.spacing.xl,
  },
  welcome: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.secondary,
    marginBottom: tokens.spacing.sm,
  },
  intro: {
    fontSize: tokens.typography.size.md,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  cardTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  cardDesc: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },

  reassurance: {
    backgroundColor: tokens.colors.surface.soft,
    marginTop: tokens.spacing.lg,
  },
  reassuranceText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeight.normal,
  },
});
