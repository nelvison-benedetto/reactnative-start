import { ActivityIndicator, SectionList, Text, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";

export default function Second() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const opacity = useSharedValue(0);
  function fadeInAnimation() {
    opacity.value = withTiming(1, {
      duration: 1000,
    });
  }

  return (
    <>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View className="bg-gray-400">
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-lg font-bold text-blue-800 mb-2 mt-4">
            {title}
          </Text>
        )}

        ItemSeparatorComponent={() => <View className="h-[0.2rem]" />} //separa gli elementi dello stesso group
        //SectionSeparatorComponent={() => <View className="h-[0.6rem]" />} //separa una sezione dalla successiva
        ListFooterComponent={() => (
          <ActivityIndicator />
          <Animated.View className={}>
            <Text>Hello</Text>
          </Animated.View>;
  )}
      />
    </>
  );
}
