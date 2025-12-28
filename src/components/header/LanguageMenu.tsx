import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function LanguageMenu({ visible, onClose, languages, onSelect }: any) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.menu}>
          {languages.map((lang: any) => (
            <TouchableOpacity
              key={lang.code}
              style={styles.item}
              onPress={() => {
                onSelect(lang.code);
                onClose();
              }}
            >
              <Text>{lang.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 16,
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    width: 180,
  },
  item: {
    padding: 12,
  },
});
