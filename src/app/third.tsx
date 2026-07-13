import { useHeaderHeight } from "@react-navigation/elements";
import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Third() {
  const [number, onChangeNumber] = useState("");
  const headerHeight = useHeaderHeight(); //altezza reale dell'header dello Stack, sopra questo screen

  function XXX(message: string): void {
    Alert.alert(message);
  }

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="padding"
      keyboardVerticalOffset={headerHeight}
    >
      <ScrollView
        className="flex-1 mt-[1rem]"
        contentContainerClassName="flex-grow p-4"
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
      >
        <Text>heheh</Text>

        <View>
          <Pressable
            onPress={() => {
              XXX("number");
            }}
            className="bg-black py-[6rem] mb-2"
          >
            <Text className="text-white text-2xl">Btnbutonn nutton</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              XXX("number");
            }}
            className="bg-black py-[6rem] mb-2"
          >
            <Text className="text-white text-2xl">Btnbutonn nutton</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              XXX("number");
            }}
            className="bg-black py-[6rem]"
          >
            <Text className="text-white text-2xl">Btnbutonn nutton</Text>
          </Pressable>
        </View>
      </ScrollView>
      <TextInput
        value={number}
        onChangeText={onChangeNumber}
        keyboardType="numeric"
        placeholder="insert a number"
        className="border border-yellow-600 "
      />
    </KeyboardAvoidingView>
  );
}
