import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
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
    <ScrollView
      className="flex-1 flex-col"
      contentContainerClassName="justify-center items-center gap-4"
    >
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
      <View className="h-[1rem] w-full mx-10" />
      <View className="w-full px-[2rem]">
        <TextInput
          className="border-2 w-full"
          onChangeText={onChangeText}
          value={number}
          keyboardType="numeric"
          placeholder="insert only nums"
        />
      </View>
      <Text className="text-xl font-bold px-[1rem] bg-green-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quos mollitia qui nostrum quas temporibus error expedita animi? Culpa
        qui pariatur architecto eaque sapiente exercitationem asperiores ad
        voluptatum saepe officiis quos enim sequi perferendis blanditiis
        similique, optio distinctio, tempora, velit provident suscipit?
        Quibusdam, eos vitae libero earum expedita minus, harum cumque maiores
        voluptatibus quae exercitationem rem quidem et, consectetur commodi
        illum ad. Laboriosam quis animi libero minus similique laborum inventore
        molestias voluptatum maxime ratione atque enim suscipit in illum
        perferendis nisi deserunt explicabo eius rerum labore, sed delectus.
        Odio rem, ullam autem in delectus dicta voluptate fuga eos aspernatur
        incidunt.
      </Text>
    </ScrollView>
  );
}
