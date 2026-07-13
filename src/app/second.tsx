import { SectionList, Text, View } from "react-native";

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

  return (
    <>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </>
  );
}
