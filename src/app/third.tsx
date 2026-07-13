import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
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
      <KeyboardAvoidingView>
        <View>
          <Text>heheh</Text>
          <TextInput
            value={number}
            onChangeText={onChangeText}
            keyboardType="numeric"
          />
          <View>
            <Pressable
              onPress={() => {
                XXX("number");
              }}
            >
              <Text>Btn</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
