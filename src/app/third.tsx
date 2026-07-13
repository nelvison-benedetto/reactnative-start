import { useHeaderHeight } from "@react-navigation/elements";
import { useState } from "react";
import {
    Alert,
    Button,
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StatusBar,
    StatusBarStyle,
    Text,
    TextInput,
    View,
} from "react-native";

const STYLES = ["default", "dark-content", "light-content"] as const;
const TRANSITIONS = ["fade", "slide", "none"] as const;

export default function Third() {
  const [number, onChangeNumber] = useState("");
  const headerHeight = useHeaderHeight(); //altezza reale dell'header dello Stack, sopra questo screen
  function XXX(message: string): void {
    Alert.alert(message);
  }

  //x status bar
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    "fade" | "slide" | "none"
  >(TRANSITIONS[0]);
  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

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
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <Text>
          StatusBar Visibility:{"\n"}
          {hidden ? "Hidden" : "Visible"}
        </Text>
        <Text>
          StatusBar Style:{"\n"}
          {statusBarStyle}
        </Text>
        <View>
          <Button
            title="Toggle StatusBar"
            onPress={changeStatusBarVisibility}
          />
          <Button
            title="Change StatusBar Style"
            onPress={changeStatusBarStyle}
          />
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
