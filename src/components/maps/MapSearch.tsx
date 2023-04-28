import { Image, ViewStyle, StyleSheet, TextInput } from "react-native";
import { View } from "@components/Themed";
import { Font, Sizes } from "@constants/Theme";
import { useColorScheme } from "react-native";
import Icon from "@constants/Icon";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";

type MapSearchProps = {
  containerStyle?: ViewStyle;
};

export default function MapSearch({ containerStyle }: MapSearchProps) {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  return (
    <View transparent style={[styles.container, containerStyle]}>
      <View lightColor="#fff" darkColor={Colors.lightGrey} style={styles.inputWrapper}>
        <Image
          source={Icon.iconSearch}
          style={[styles.image, { tintColor: darkMode ? "#fff" : Colors.secondary }]}
        />
        <TextInput
          style={[styles.input, { color: darkMode ? Colors.dark.text : Colors.dark.text }]}
          placeholder="Find Your Location"
          placeholderTextColor={darkMode ? Colors.dark.text2 : Colors.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: Sizes.large,
  },
  inputWrapper: {
    borderRadius: Sizes.radius,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.medium,
    columnGap: Sizes.small,
    ...Styles.g.lightShadow,
  },
  input: {
    flex: 1,
    height: 70,
    fontFamily: Font.medium,
  },
  image: {
    width: Sizes.icon,
    height: Sizes.icon,
  },
});
