import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  function MyTest() {
    console.log("heyhey");
  }

  function showAlert(message: string): void {
    //throw new Error("Function not implemented.");
    Alert.alert(message);
  }
  function showAlert2(message: string): void {
    Alert.alert(message);
  }

  const [text, onChangeText] = useState("default text");
  const [number, onChangeNumber] = useState("");

  return (
    <View className="justify-center items-center flex-1 flex-col">
      <Text className="text-xl font-bold text-blue-600">
        Welcome to Nativewind!
      </Text>
      <Button
        title="press me!"
        onPress={() => showAlert("cliccked btn!")}
      ></Button>
      <Pressable
        className="bg-blue-500 pressed:bg-blue-700 p-4"
        onPress={() => showAlert2("Clicked 2")}
      >
        <Text className="text-white font-semibold">pressablewhattddt</Text>
      </Pressable>

      <View className="w-1/2 h-60 rounded-full  overflow-hidden border-red-600 border-2">
        <Image
          source={require("../../assets/images/competesrl-working.jpg")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <View className="h-30 w-full" />
      <TextInput
        className="border-2"
        onChangeText={onChangeText}
        value={number}
        keyboardType="numeric"
        placeholder="insert only nums"
      />
    </View>
  );
}
