import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
};

// ⚡ Update this to your backend URL
const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
if (!BACKEND_URL) {
  console.error('❌ BACKEND_URL is not defined');
}

async function getAssistantResponse(userInput: string) {
  if (!BACKEND_URL) {
    return 'Configuration error: backend URL not set.';
  }

  try {
    const response = await axios.post(BACKEND_URL, { input: userInput });

    const output = response.data?.output;

    if (!output) {
      console.error('❌ Invalid backend response:', response.data);
      return 'Sorry, I could not generate a response.';
    }

    return output.trim();
  } catch (error: any) {
    console.error(
      '❌ Backend API error:',
      error?.response?.status,
      error?.response?.data || error.message
    );
    return 'Sorry, I am having trouble answering right now. Please check your internet connection or try again later.';
  }
}

export default function HomeScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'Hello. I am your Neuro Care Assistant. I answer questions about Neuro Care Foundation and Neurological Health. \nHow can I help you today?',
      sender: 'assistant',
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
    };

    const typingId = `typing-${Date.now()}-${Math.random()}`;

    // 1️⃣ Add user message + typing indicator
    setMessages((prev) => [...prev, userMessage, { id: typingId, text: '...', sender: 'assistant' }]);

    // 2️⃣ Get assistant response from backend
    const assistantText = await getAssistantResponse(userText);

    // 3️⃣ Replace typing bubble with real response
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === typingId
          ? { id: Date.now().toString(), text: assistantText, sender: 'assistant' }
          : msg
      )
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chat}
        renderItem={({ item }) => (
          <View
            style={[styles.message, item.sender === 'user' ? styles.user : styles.assistant]}
          >
            <Text style={[styles.text, item.sender === 'user' && { color: '#fff' }]}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Ask about neurological health..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  chat: { padding: 12 },
  message: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    maxWidth: '80%',
  },
  assistant: {
    backgroundColor: '#F3F4F6',
    alignSelf: 'flex-start',
  },
  user: {
    backgroundColor: '#2563EB',
    alignSelf: 'flex-end',
  },
  text: {
    color: '#000',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 20,
    marginRight: 10,
  },
});
