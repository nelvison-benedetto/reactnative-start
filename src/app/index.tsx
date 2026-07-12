import { Alert, Button, Pressable, Text, View } from "react-native";

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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
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
    </View>
  );
}
