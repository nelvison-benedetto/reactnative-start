import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Third() {
  const [text, onChangeText] = useState("initial text");
  const [number, onChangeNumber] = useState("");

  function XXX(message: string): void {
    Alert.alert(message);
  }

  return (
    <>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <View>
          <Text>heheh</Text>
          <TextInput
            value={number}
            onChangeText={onChangeText}
            keyboardType="numeric"
            placeholder="insert a number"
            className="border border-yellow-600"
          />
          <View>
            <Pressable
              onPress={() => {
                XXX("number");
              }}
              className="bg-black"
            >
              <Text className="text-white">Btn</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
