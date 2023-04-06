import Colors from "@constants/Colors";
import Icon from "@constants/Icon";
import { Font, Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import { Image, ViewStyle } from "react-native";
import { View, TextInput } from "./Themed";

type SearchBarProps = {
  placeholder?: string;
  containerStyle?: ViewStyle;
};

export default function SearchBar({ placeholder, containerStyle }: SearchBarProps) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        height: 50,
        alignItems: "center",
        backgroundColor: colorScheme === "light" ? Colors.lightSecondary : Colors.darkTint,
        borderRadius: Sizes.radius,
        paddingHorizontal: Sizes.small,
        ...containerStyle,
      }}
    >
      <Image
        source={Icon.iconSearch}
        style={{
          width: Sizes.icon,
          height: Sizes.icon,
          marginRight: Sizes.xSmall,
          tintColor: colorScheme === "light" ? Colors.secondary : "#fff",
        }}
      />
      <TextInput
        placeholder={placeholder}
        style={{ flex: 1, height: "100%", fontFamily: Font.regular }}
        selectionColor={colorScheme === "light" ? Colors.light.text : Colors.dark.text}
      />
    </View>
  );
}
