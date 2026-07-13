import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  Switch,
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

  const [isEnabled, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable((previousState) => !previousState);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  type ItemProps = { title: string };
  const Item = ({ title }: ItemProps) => (
    <View className="p-[1rem] bg-red-800">
      <Text className="text-white">{title}</Text>
    </View>
  );

  return (
    // <ScrollView
    //   className="flex-1 flex-col"
    //   contentContainerClassName="justify-center items-center gap-4 py-[2rem]"
    // >
    <>
      <View className="flex-1 flex-col justify-center items-center gap-4 py-[2rem]">
        <Text className="text-xl font-bold text-blue-600">
          Welcome to Nativewind!
        </Text>
        <Button
          title="press me!"
          onPress={() => showAlert("cliccked btn!")}
        ></Button>
        <Pressable
          className="bg-blue-500 pressed:bg-blue-700 p-4"
          onPress={() => {
            showAlert2("Clicked 2 and Go To Page 2!");
            router.push("/second");
          }}
        >
          <Text className="text-white font-semibold">alert+gotopage2</Text>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quos mollitia qui nostrum quas temporibus error
          expedita animi?
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: "#000", true: "#fff" }} //color switch btn in on mode
          thumbColor={isEnabled ? "#f5dd4b" : "#4B39EF"} //color switch btn in off mode
        />
        <FlatList //questo non finziona dentro un View, dovresti invece usare QUESTO COME WRAPPER PRINCIPALE e mettere i components targtes within ListHeaderComponent={}
          className="flex-1 w-full"
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />} //item appartiene alla classe interna al component
          keyExtractor={(item) => item.id} //item appartiene alla classe interna al component
          ListHeaderComponent={() => (
            //IN APPS REALI QUA VA LA BIO ECT,
            <View>
              <Text>header list</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
        <View>
          <Text>dhbsjdhcbsjdhc</Text>
        </View>
        {/* </ScrollView> */}
      </View>
    </>
  );
}
